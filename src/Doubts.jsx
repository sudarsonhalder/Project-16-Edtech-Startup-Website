import React from 'react';
const Doubts=(props)=>{
    return(
    <>
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-5 pt-5 pt-lg-0 order-1 order-lg-0 s-flex justify-content-center flex-column'>
               <h1>{props.name}<strong className='brand-name'>faster.</strong></h1>
               <h2>🌐 Accesible everywhere</h2>
               <p>Access to quality education anytime,anywhere</p>
               <h2> 🎦 1 million + videos</h2>
               <p>Unlimited acess to video solution</p>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.img4} className='img-fluid animated' alt='Home img'/>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
    );
};

export default Doubts;