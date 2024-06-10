// SignupOwner.js
import { getDatabase, ref, update, get } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
const UpdateCourseDashboard = () => {
  const serverUrl = "http://localhost:3001";
  const Navigate = useNavigate();

  const auth = useAuth();
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    images: ""
  });

  const [artworkData, setArtworkData] = useState([]);

  useEffect(() => {
    const getListing = async () => {
      try {
        const artworkRef = ref(getDatabase(), `courses/${id}`);
        const snapshot = await get(artworkRef);
        const data = snapshot.val();
        console.log(data);
        setArtworkData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getListing();
  }, [id])

  const [selectedFeaturedImage, setSelectedFeaturedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const artworkRef = ref(getDatabase(), "courses");
      await update(artworkRef, formData);
      toast.success('Course has been updated.');
      Navigate('/dashboard/my-courses');
    } catch (e) {
      console.log(e.message);
    }
  }
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
      setSelectedFeaturedImage(results[0])
    });
    } catch (error) {
      console.error('Error uploading files:', error);
      console.error('Error stack:', error.stack);
    }
  };

  return (
    <>
    <Row className="px-2">
      <Col className="p-4 card">
        <Row className="mobile-direction-column-only">
          <Col xs={12} md={3}>
          <img
            className="thumbnailImg rounded"
            src={
              selectedFeaturedImage 
                ? selectedFeaturedImage 
                : (artworkData && artworkData.images) 
                  ? artworkData.images[0]
                  : "/assets/backend/images/featured-img.webp"
            }
            alt="Featured Image"
            style={{height: '400px', objectFit: 'cover'}}
          />
          </Col>
        </Row>
        <Form className="mt-5" onSubmit={handleSubmit}>
          <a href={artworkData.courseLink} className="btn btn-primary mb-3 mt-0">Visit Course</a>
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
          <Row> 
            <Col sm="12">
              <Form.Control
                className='p-3 mt-3'
                type="text"
                name="description"
                value={formData.description}
                onChange={(e) => handleChange(e)}
                placeholder="Course Description"
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

    </>
  );
};

export default UpdateCourseDashboard;
