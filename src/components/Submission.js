import { Col, Row, Form, Button } from "react-bootstrap"
import { IoIosArrowForward } from "react-icons/io";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";
import toast from "react-hot-toast";
import {ref, push } from "firebase/database";

const Submission = () => {

  const Navigate = useNavigate();
  const serverUrl = "http://localhost:3001";  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    artist: "",
    year: "",
    title: "",
    medium: "",
    materials: "",
    rarity: "",
    height: "",
    width: "",
    depth: "",
    provenance: "",
    city: "",
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
      const artworkRef = ref(database, "artwork");
      await push(artworkRef, formData);
      toast.success('Artwork has been listed.');
      Navigate('/dashboard/my-artwork');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
    <Row className='m-0 px-5 gap-3 py-5 bg-theme' style={{ background: 'rgb(255 255 255 / 89%)' }}>
      {/* <Row>
          <Col className="d-flex justify-content-between align-items-center">
              <h6>Contact Information</h6>
              <IoIosArrowForward style={{width: '14px'}} />
          </Col>

          <Col className="d-flex justify-content-between align-items-center">
              <h6>Contact Information</h6>
              <IoIosArrowForward style={{width: '14px'}} />
          </Col>

          <Col className="d-flex justify-content-between align-items-center">
              <h6>Contact Information</h6>
              <IoIosArrowForward style={{width: '14px'}} />
          </Col>
          <hr style={{color: "#6a6a6a "}}/>
        </Row> */}
        <Row>
          <Col>
            <h3>Let us know how to reach you</h3>
            <p>We will only use these details to contact you regarding your submission.</p>
            <Form className="mt-5" onSubmit={handleSubmit}>
                <Row> 
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Name"
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="Email"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm="6">
                      <Form.Control
                        className='p-3'
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone Number"
                      />
                    </Col>
                </Row> 

                <Row className="mt-5">
                  <Col xs={12}>
                  <h3>Tell us about your artwork</h3>
                  <p>• All fields are required to submit a work.</p>
                  </Col>
                </Row>
                <Row> 
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="artist"
                      value={formData.artist}
                      onChange={(e) => handleChange(e)}
                      placeholder="Artist"
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={(e) => handleChange(e)}
                      placeholder="Year"
                    />
                  </Col>
                </Row>
                <Row className="mt-3"> 
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) => handleChange(e)}
                      placeholder="Title"
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="medium"
                      value={formData.medium}
                      onChange={(e) => handleChange(e)}
                      placeholder="Medium"
                    />
                  </Col>
                </Row>
                <Row className="mt-3"> 
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="materials"
                      value={formData.materials}
                      onChange={(e) => handleChange(e)}
                      placeholder="Materials"
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="rarity"
                      value={formData.rarity}
                      onChange={(e) => handleChange(e)}
                      placeholder="Rarity"
                    />
                  </Col>
                </Row>
                <Row className="mt-3"> 
                  <Col sm="4">
                    <Form.Control
                      className='p-3'
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={(e) => handleChange(e)}
                      placeholder="Height (Inches)"
                    />
                  </Col>
                  <Col sm="4">
                    <Form.Control
                      className='p-3'
                      type="number"
                      name="width"
                      value={formData.width}
                      onChange={(e) => handleChange(e)}
                      placeholder="Width (Inches)"
                    />
                  </Col>
                  <Col sm="4">
                    <Form.Control
                      className='p-3'
                      type="number"
                      name="depth"
                      value={formData.depth}
                      onChange={(e) => handleChange(e)}
                      placeholder="Depth (Inches)"
                    />
                  </Col>
                </Row>
                <Row className="mt-3"> 
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="provenance"
                      value={formData.provenance}
                      onChange={(e) => handleChange(e)}
                      placeholder="Provenance (Describe how you acquired the artwork)"
                    />
                  </Col>
                  <Col sm="6">
                    <Form.Control
                      className='p-3'
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={(e) => handleChange(e)}
                      placeholder="City"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <h6 className="m-2">Upload images of your Artwork</h6>
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

export default Submission