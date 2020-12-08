import React from 'react';
import img6 from "./images/img6.png";
import capimg from "./images/capimg.png";
import solimg from "./images/solimg.png";
import './Howwork.css';
const Howworks=()=>{
    return(<><h1 className='brand-name8'><strong>How it works ? </strong></h1>
    <div class="row">
<div class=" col-md-4">
    <div class="maincard2">
    <img src={img6} class="cardimg2 " alt="First sample image"></img>
</div>
<h4 class="paracard2">Have a doubt ? </h4>
</div>
<div class=" col-md-4 ">
    <div class="maincard2">
    <img src={capimg} class="cardimg2 " alt="First sample image"></img>
</div>
<h4 class="paracard2">Type your question or<br/> Upload an image</h4>
</div>
<div class=" col-md-4 ">
    <div class="maincard2">
    <img src={solimg} class="cardimg2 " alt="First sample image"></img>
</div>
<h4 class="paracard2">Get your solution</h4>
</div>

</div>
<div className='mt-3 centerbutton'>
    <button className="btn-get-started">Clarify your doubts now!</button>
               </div>
               </>

    );
};

export default Howworks;