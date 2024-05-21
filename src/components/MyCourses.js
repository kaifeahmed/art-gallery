import React, { useEffect, useState } from 'react'
import ListingDatatable from './ListingDatatable';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCourses } from './utils';

export default function MyCourses() {

    const[listings, setListings] = useState([]);
    
    
    // Sample columns
    const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'backgroundImage', accessor: 'backgroundImage' },
    // ... more columns
    ];
      useEffect(() => {
        const fetchListings = async () => {
            try {
                const listings = await getAllCourses();
                setListings(listings);
                console.log(listings);
            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        }
        fetchListings();
    }, []);
    
      
    const transformedData = listings ? listings.map((listing) => ({
        id: String(listing.id),
        title: listing.title, // Replace 'listingTitle' with the actual property name in your listing object
        price: listing.title, // Hardcoded price
        backgroundImage: listing.images[0], // Assuming 'featured_image' is the property containing the image URL
      })) : [];


  return (
    <>
    <div class="row">
        <div class="col">
            <div class="page-description">
                <Row>
                    <Col xs={6}>
                        <h1>My Courses</h1>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-end align-items-center'>
                        <Link className='btn btn-primary' to='/dashboard/add-artwork'>Add Course</Link>
                    </Col>
                </Row>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card calendar-container">
                <div class="card-body">
                    {/* Render the Listing component only if there is data */}
                    {listings && listings.length > 0 ? (
                      <ListingDatatable data={transformedData} columns={columns}/>
                    ) : (
                      <p>No listings available</p>
                    )}
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}
