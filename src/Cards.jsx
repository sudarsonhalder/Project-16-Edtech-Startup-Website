import React from 'react';
import cardimg3 from "./images/img3.png";
const Card=(props)=>{
    return(
    <>
<div class="row">
<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.imgsrc3} class="cardimg " alt="First sample image"></img>
    <p class="paracard">40,000+ Doubts cleared </p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.imgsrc3} class="cardimg " alt="First sample image"></img>
    <p class="paracard">40,000+ Doubts cleared </p>
</div>
</div>

<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.imgsrc3} class="cardimg " alt="First sample image"></img>
    <p class="paracard">40,000+ Doubts cleared </p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.imgsrc3} class="cardimg " alt="First sample image"></img>
    <p class="paracard">40,000+ Doubts cleared </p>
</div>
</div>
</div>
  

        </>
    );
};

export default Card;