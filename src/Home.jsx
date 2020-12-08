import React from 'react';
import web from "./images/img2.png";
import img4 from "./images/img4.png";
import cardimg3 from './images/img3.png';
import vidimg from "./images/vidimg.png";
import doubtimg from "./images/doubtimg.png";
import statimg from "./images/statimg.png";
import Common from './Common';
import Cards from "./Cards";
import Howwork from "./howwork/Howwork";
import Doubts from "./Doubts";
const Home=()=>{
    return(
<>
    <Common
    name='Clarify your '
    imgsrc={web} 
    visit='./'
    btname='🡳 Ask your doubt now'/>
    <Cards
    imgsrc3={cardimg3}
    vidimg={vidimg}
    statimg={statimg}
    doubtimg={doubtimg}/>
    <Doubts
    name='Solve your doubts '
    img4={img4} />

    <Howwork
    btname2='🡳 Ask your doubt now'
    visit='./'/>
</>
    );
};

export default Home;