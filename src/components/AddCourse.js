import { Col, Row, Form, Button } from "react-bootstrap"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";
import toast from "react-hot-toast";
import {ref, push } from "firebase/database";

const AddCourse = () => {

  const Navigate = useNavigate();
  const serverUrl = "http://localhost:3001";  

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    images: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
  
    setSelectedImages(files);
  
    const formData = new FormData();
  
    files.forEach((file, index) => {
      formData.append('files', file); // Use 'files' as the key for each file
    });
    try {
      const response = await fetch(`${serverUrl}/upload-images`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Server Response:', responseData);
      
        if (responseData.success) {
          // Use the server's response to update the state with image URLs
          setFormData((prevDetails) => ({
            ...prevDetails,
            images: responseData.file_names.map((filename) => `${serverUrl}/images/${filename}`),
          }));
          
      console.log('formData Images');
      console.log(formData);
        } else {
          console.error('File upload failed. Server returned:', responseData.message);
        }
      } else {
        console.error('File upload failed. Server returned:', response);
      }
      
          // Generate previews for selected images
    const previews = Array.from(files).map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });
  
    Promise.all(previews).then((results) => {
      setImagePreviews(results);
    });
    } catch (error) {
      console.error('Error uploading files:', error);
      console.error('Error stack:', error.stack);
    }
  };
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const artworkRef = ref(database, "courses");
      await push(artworkRef, formData);
      toast.success('Artwork has been listed.');
      Navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
    <Row className='m-0 px-5 gap-3 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 89%)' }}>
        <Row>
          <Col>
            <h3>Submit the form below to list your course.</h3>
            <p>This information will be used on the website.</p>
            <Form className="mt-5" onSubmit={handleSubmit}>
                <Row> 
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) => handleChange(e)}
                      placeholder="Course Title"
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="price"
                      name="price"
                      value={formData.price}
                      onChange={(e) => handleChange(e)}
                      placeholder="Price"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <h6 className="m-2">Upload images of your Course</h6>
                  <Col sm="12">
                    <Form.Control
                      type="file"
                      name="images"
                      accept="image/*"
                      onChange={handleImageChange}
                      multiple
                    />
                  </Col>
                  {imagePreviews.length > 0 && (
                    <div className="image-gallery">
                      {imagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`Preview ${index}`}
                          className="image-preview"
                        />
                      ))}
                    </div>
                  )}
                </Row>
                <Button variant="dark" className="blue-button mt-3 px-5 py-3" type="submit">
                  Submit
              </Button>
            </Form>
          </Col>
        </Row>
    </Row>
    </>
  )
}

export default AddCourse