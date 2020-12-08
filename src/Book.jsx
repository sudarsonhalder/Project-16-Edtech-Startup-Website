import React from 'react';
import "./Book.css";
import ncert from "../src/images/ncert.png";
import error from "../src/images/error.png";
import kc from "../src/images/kc.png";
import starora from "../src/images/starora.png";
const Book=()=>{
    return(<>
        <h2  className='brand-name2'><strong className='brand-name'>Free access </strong>to 5000+ books</h2>
<div class="row">
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={ncert} class="cardimg3 " alt="First sample image"></img>
    <p class="paracard5">Ncert</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={error} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">Errorless</p>
</div>
</div>

<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={starora} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">Kc sinha</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={ncert} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">St.Arora</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={error} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">St.Arora</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={kc} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">St.Arora</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={error} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">St.Arora</p>
</div>
</div>
<div class=" col-md-3 ">
    <div class="maincard5">
    <img src={kc} class="cardimg " alt="First sample image"></img>
    <p class="paracard5">St.Arora</p>
</div>
</div>
</div>
</>
    );
};

export default Book;