import React from 'react';
const Card=(props)=>{
    return(
    <>
<div class="row">
<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.doubtimg} class="cardimg " alt="First sample image"></img>
    <p class="paracard">40,000+ Doubts cleared </p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.statimg} class="cardimg " alt="First sample image"></img>
    <p class="paracard">20 + state board</p>
</div>
</div>

<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.vidimg} class="cardimg " alt="First sample image"></img>
    <p class="paracard">1,000,000+ Video lecture</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard">
    <img src={props.imgsrc3} class="cardimg " alt="First sample image"></img>
    <p class="paracard">5000+ Books covered</p>
</div>
</div>
</div>
  

        </>
    );
};

export default Card;