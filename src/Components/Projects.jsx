import React from 'react'
// import link from '../img/link.png'
import Item from './Item'
import data from './data.json'
export default function Projects() {

    return (
     <>
      <div className="projects-title">
          Welkome to my portfolio page!
     </div>
     <div className="projects container">
        {data.map( dataitem => (
               <Item key={dataitem.id} link={dataitem.link} picture={dataitem.picture} name={dataitem.name}/>
           ))} 
       
     </div>
     </>
      
    )
}