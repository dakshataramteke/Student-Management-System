import React from 'react';
import './Gallery.css';
import {Link} from 'react-router-dom';

const Gallery = () => {
  return (
    <div className='container Gallery_wrapper' style={{ marginTop: '5rem' }}>
    <h1 className='text-center'>GALLERY OF COLLEGE</h1>
    <div className="row p-4 mt-5" style={{ backgroundColor: '#FFFFC5' }}>
        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <img src="/Images/director2020.jpg" className="rounded  " alt="" height={'230px'} width={'200px'} />
        </div>
        <div className="col-12 col-md-9 gallery_details">
            <h3>Prof. Virendra Kumar Tewari</h3>
            <p><i> Director, IIT Kharagpur</i></p>
            <a href="#" style={{ textDecoration: 'none' }} className='gallery_details_link'>director@iitkgp.ac.in</a>
        </div>
    </div>
    <div className="row">
    <div className="col-12 mt-4">
    <p><b> Prof. Virendra Kumar Tewari</b>, faculty member and former Head of the Department of Agricultural and Food Engineering and Rural Development Centre has been appointed as the Director of Indian Institute of Technology Kharagpur effective from December 31, 2019, for a period of five years.</p>
    </div>
    
    </div>

    <div className="row my-4 gallery_photos">
        <div className="col-12 col-md-4 ">
            <img src="/Images/gal1.jpg" alt="" className='Gallery_image' />
           <h5 className='text-center'>Individual Book</h5>
        </div>
        <div className="col-12 col-md-4">
            <img src="/Images/gal2.jpg" alt="" className='Gallery_image' />
            <h5 className='text-center'>Library Books</h5>
        </div>
        <div className="col-12 col-md-4">
            <img src="/Images/gal3.jpg" alt="" className='Gallery_image' />
            <h5 className='text-center'>Study Material</h5>
        </div>
    </div>

    <div className="row mt-5 gallery_photos">
        <div className="col-12 col-md-4">
            <img src="/Images/gal4.jpg" alt="" className='Gallery_image' />
            <h5 className='text-center'>Study Material</h5>
        </div>
        <div className="col-12 col-md-4">
            <img src="/Images/gal5.jpg" alt="" className='Gallery_image' />
            <h5 className='text-center'>College Campus</h5>
        </div>
        <div className="col-12 col-md-4">
            <img src="/Images/gal6.jpg" alt="" className='Gallery_image' />
            <h5 className='text-center'>Library </h5>
        </div>
    </div>

    <div className='my-5'>
        <Link to={'/'}>Back to Home</Link>
    </div>
</div>
  )
}

export default Gallery
