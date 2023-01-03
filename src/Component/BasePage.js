import React, { useState } from 'react';
import propic from './programmer.jpg'
import Intro from './Introduction';

import './BasePage.css'
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';


const displayedPage=(currentPage)=>{
    if(currentPage==='Intro'){
        return <Intro/>
    }
    else if(currentPage==='Skills'){
        return <Skills/>
    }
    else if(currentPage==='Exp'){
        return <Experience/>
    }
    if(currentPage==='Pro'){
        return <Projects/>
    }
}

const BasePage=()=>{
    const [currentPage,changeCurrentPage]=useState("Intro")
    return(
        <React.Fragment>
            <div className="leftSide">
                <div className='profile'>
                    <img className='profilePic' src={propic} width="150px" height="150px" alt="profile picture"/>
                    <h1>Jim Joseph</h1>
                    <p>UI & UX Developer<br/>
                    React JS developer<br/>
                    MERN Full Stack Developer</p>
                </div>
            </div>
            <div className='rightSide'>
                <ul>
                    <li><button onClick={()=>changeCurrentPage("Intro")}>Introduction</button></li>
                    <li><button onClick={()=>changeCurrentPage("Skills")}>Skills</button></li>
                    <li><button onClick={()=>changeCurrentPage("Exp")}>Experience</button></li>
                    <li><button onClick={()=>changeCurrentPage("Pro")}>Projects</button></li>
                </ul>
                {displayedPage(currentPage)}
            </div>
        </React.Fragment>
    )
}

export default BasePage;