import { useState, useEffect} from 'react'
import { Col } from 'react-bootstrap';
import { getAllCourses } from './utils';
import { Link } from 'react-router-dom';

const AllClasses = () => {
  const [courses, setAllCourses] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listings = await getAllCourses();
        console.log('listings');
        console.log(listings);
        setAllCourses(listings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
    {courses.map((course) => (
      <Col xs={4} key={course.id} className='mb-4'>
        <Link to={'/single-course/'+course.id}>
        <div style={{ background: `url('${course.images[0]}') no-repeat center/cover`, height: '280px' }}></div>
        <div className='d-flex flex-column gap-0 mt-2'>
          <h6 className='m-0'>{course.title}</h6>
          <p className='m-0' style={{ fontWeight: 'bold', fontSize: '14px' }}>PKR {course.price}</p>
        </div>
        </Link>
      </Col>
    ))}
  </>
  )
}

export default AllClasses