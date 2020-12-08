import React from 'react';
import test from "../src/images/test.png";
const Board=()=>{
    return(
   <>      <h2  className='brand-name2'><strong className='brand-name'>State Boards</strong></h2>
   <div class="row">
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test} class="cardimg3 " alt="Maharashtra"></img>
       <p class="paracard5">Maharashtra</p>
   </div>
   </div>
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="Rajasthan"></img>
       <p class="paracard5">Rajasthan</p>
   </div>
   </div>
   
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="Madhya Pradesh"></img>
       <p class="paracard5">Madhya Pradesh</p>
   </div>
   </div>
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="West Bengal"></img>
       <p class="paracard5">West Bengal</p>
   </div>
   </div>
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="Gujrat"></img>
       <p class="paracard5">Gujrat</p>
   </div>
   </div>
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="Uttar Pradesh"></img>
       <p class="paracard5">Uttar Pradesh</p>
   </div>
   </div>
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="Kerala"></img>
       <p class="paracard5">Kerala</p>
   </div>
   </div>
   <div class=" col-md-3 ">
       <div class="maincard5">
       <img src={test}  class="cardimg " alt="Tamil Nadu"></img>
       <p class="paracard5">Tamil Nadu</p>
   </div>
   </div>
   </div>
   </>

    );
};

export default Board;