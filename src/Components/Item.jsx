import React from 'react';

function Item(props) {
    return (
       
            <div className='projects-item'>
                <img className='project_img' src={props.picture} alt="" />
                <div className="projects-item_name">
                  {props.name}  
                </div>
                <div className="projects-item_content">
                     Check out this project 
                </div>
                <a className='project-name' href={props.link}  >
                    {/* <img className='project-link'  src={link} alt="" /> */}
                    <span>  See the project</span>
               
                </a>
                
           </div>
      
    );
}

export default Item;