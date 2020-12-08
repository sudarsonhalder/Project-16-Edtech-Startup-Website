import React from 'react';
import {NavLink} from "react-router-dom";
const Common=(props)=>{
    return(
    <>
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto mt-0'>
                <div className='row'>
                <div className='col-md-5 pt-5 pt-lg-0 order-1 order-lg-0 s-flex justify-content-center flex-column'>
               <h1>{props.name}<strong className='brand-name'>doubts </strong>in your language.</h1>
               <div className='mt-3'>
    <NavLink to={props.visit} className="btn-get-started2">{props.btname}</NavLink>
               </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.imgsrc} className='img-fluid animated' alt='Home img'/>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
    );
};

export default Common;