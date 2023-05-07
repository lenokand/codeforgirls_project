
import React from 'react'
import hobby1 from '../img/hobby1.png'
import hobby2 from '../img/hobby2.png'
import hobby3 from '../img/hobby3.png'
import hobby4 from '../img/hobby4.png'
import Button from './Button'


export default function MainPage() {
   
    return (
        <div className='about-page container'>
            <h1>Dear Ladies and Gentlemens, <br/> welkome to my portfolio page!</h1>
            <div className='about-text'>
            Hello, I am Olena Andryshchenko, Front-end developer. <br/><br/>
            I am from Ukraine, and now I live in Switzerland, Bern.<br/><br/>
            I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. 
            Proven ability to transform client ideas into beautiful, functional web solutions.<br/><br/>
            I look forward to meet you and discuss the Frontend position and my qualifications in more detail. I am available to talk at your soonest convenience. 

            </div>

          <Button/>
            <div className="hobby-block">
                My interests
            </div>
            <div className="about-interesst">
                <img src={hobby1} alt="" />
                <img src={hobby2} alt="" />
                <img src={hobby3} alt="" />
                <img src={hobby4} alt="" />

            </div>
        </div>
    )
}