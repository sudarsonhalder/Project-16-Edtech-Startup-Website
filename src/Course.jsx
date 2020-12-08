import React from 'react';
import bio from "../src/images/bio.png";
import physics from "../src/images/physics.png"
import maths from "../src/images/maths.png"
import chem from "../src/images/chem.png"
import "./Course.css"
const Course=()=>{
    return(<>
<h2 className='brand-name'><strong>Explore the subject with us</strong></h2>
<div class="row">
<div class=" col-md-3 ">
    <div class="maincard3">
    <img src={chem} class="cardimg3 " alt="First sample image"></img>
    <p class="paracard3">Chemistry</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard3">
    <img src={maths} class="cardimg " alt="First sample image"></img>
    <p class="paracard3">Mathematics</p>
</div>
</div>

<div class=" col-md-3 ">
    <div class="maincard3">
    <img src={physics} class="cardimg " alt="First sample image"></img>
    <p class="paracard3">Physics</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard3">
    <img src={bio} class="cardimg " alt="First sample image"></img>
    <p class="paracard3">Biology</p>
</div>
</div>
</div>
</>
    );
};

export default Course;