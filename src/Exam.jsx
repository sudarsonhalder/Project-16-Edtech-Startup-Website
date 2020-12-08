import React from 'react';
import examprep from "./images/examprep.png";
import neetprep from "./images/neetprep.png";
const Exam=()=>{
    return(<>
        <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto mt-0'>
                <h2 className='brand-name2'><strong className='brand-name'>JEE</strong> Mains and Advanced Preparation.</h2>
                    <div className='row'>
                    <div className='col-md-5 pt-5 pt-lg-0 order-1 order-lg-0 s-flex justify-content-center flex-column'>
                   <h3 className='brand-name'>Micro concept videos</h3>
                   <h6>Find Multilingual video explantion important and frequently confused concepts from every subjects</h6>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={examprep} className='img-fluid animated' alt='Home img'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
         <section id='header' className='d-flex align-items-center'>
         <div className='container-fluid'>
             <div className='row'>
                 <div className='col-10 mx-auto mt-0'>
                 <h2 className='brand-name2'><strong className='brand-name'>NEET</strong> Preparation.</h2>
                     <div className='row'>
                     <div className='col-md-5 pt-5 pt-lg-0 order-1 order-lg-0 s-flex justify-content-center flex-column'>
                    <h3 className='brand-name'>Micro concept videos</h3>
                    <h6>Find Multilingual video explantion important and frequently confused concepts from every subjects</h6>
                     </div>
                     <div className='col-lg-6 order-1 order-lg-2 header-img'>
                     <img src={neetprep} className='img-fluid animated' alt='Home img'/>
                     </div>
                     </div>
                 </div>
             </div>
         </div>
         </section>
        
</>
    );
};

export default Exam;