// ProductList.js

import React, { useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListingDatatable = ({ data, columns }) => {
  const [search, setSearch] = useState('');

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 9 },
    },
    usePagination
  );

  const memoizedColumns = useMemo(() => columns, [columns]);

  const containerStyle = {
    minHeight: '350px',
    borderRadius: '20px',
    padding: '3px',
    backgroundSize: 'cover',
    margin: '0px',
    backgroundPosition: 'center',
  };

  const priceTagStyle = {
    background: 'white',
    color: 'black',
    padding: '6px 15px',
    borderRadius: '10px',
    width: 'max-content',
    marginTop: '10px',
  };

  const boatFeaturesStyle = {
    gap: '20px',
    background: 'grey',
    borderRadius: '10px',
    color: 'white',
    padding: '15px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  };

  const filteredPage = page.filter(row =>
    Object.values(row.values).some(
      value => value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
     
      <div class="form-floating mb-3">
            
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control form-control-solid-bordered"
              id="floatingInput"
            />
            <label for="floatingInput">Search</label>
        </div>

      <div className="container">
        <Row >
          {filteredPage.map((row, rowIndex) => (
            <Col key={rowIndex} md={4} className='mt-4'>
              <Link to={`/dashboard/listing/${row.values.id}`} style={{textDecoration: "none"}}>
                <div
                  className="row productCard p-3"
                  style={{
                    ...containerStyle,
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${row.values.backgroundImage}')`,
                  }}                  
                >
                  <div className="col-12" style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
                    <p style={priceTagStyle}>{row.values.name ? row.values.name : 'Course'}</p>
                    <div className="row">
                      <div className="col-12"></div>
                      <div className="row">
                        <h3 style={{ padding: '0px', color: 'white' }}>{row.values.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      <Row className='mt-4'>
        {/* <Col xs={6} className='d-flex align-items-center'>
          <span className='m-2'>
            Page{' '}
            <strong>
              {pageIndex + 1} of {page.length}
            </strong>{' '}
          </span>
        </Col> */}
        <Col xs={12} className='d-flex justify-content-end'>
          <button
            className={`btn ${canPreviousPage ? 'btn-primary' : 'btn-light'} m-1`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}>
            Previous Page
          </button>
          <button
            className={`btn ${canNextPage ? 'btn-primary' : 'btn-light'} m-1`}
            onClick={() => nextPage()}
            disabled={!canNextPage}>
            Next Page
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ListingDatatable;
