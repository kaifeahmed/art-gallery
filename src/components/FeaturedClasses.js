import { Row, Col } from 'react-bootstrap';
import { getAllCourses } from './utils';
import { useState, useEffect} from 'react'

const FeaturedClasses = ({}) => {
  
    const [featuredClasses, setFeaturedClasses] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listings = await getAllCourses();
        console.log('listings');
        console.log(listings);
        setFeaturedClasses(listings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <Row className='m-0 px-4 bg-theme' style={{ background: 'rgb(255 255 255 / 79%)' }}>
        <h3 style={{marginBottom: '40px', fontWeight: '600'}}>Featured Courses</h3>
        {featuredClasses.map((course, index) => (
          <Col key={course.id} xs={2}>
            <div style={{background: `url("${course.images[0]}")`,backgroundSize: `140px`, height: `140px`, borderRadius: '8px'}}></div>
            <p className='mt-2'>{course.title}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturedClasses;
