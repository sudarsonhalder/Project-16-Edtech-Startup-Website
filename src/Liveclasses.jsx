import React from 'react';
import img5 from "../src/images/img5.png"
const Liveclasses=()=>{
    return(<>
        <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                    <div className='col-md-5 pt-5 pt-lg-0 order-1 order-lg-0 s-flex justify-content-center flex-column'>
                   <h1><strong className='brand-name'>Live </strong>classes</h1>
                   <h2>🌐 Accessible everywhere</h2>
                   <p>Access to quality education anytime,anywhere</p>
                   <h2>👨‍🏫 Expert teacher</h2>
                   <p>Unlimited acess to video solution</p>
                   <h2>📋 Interactive session</h2>
                   <p>Small group for maximum student-teacher interaction</p>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={img5} className='img-fluid animated' alt='live img'/>
                    <h2><strong className='brand-name'>First class free !</strong></h2>
                    <div className='mt-3'>
    <button className="btn-get-started2">Book a class now!</button>
               </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>

    );
};

export default Liveclasses;