import React from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Common from './Common';

const About=()=>{
    return(
    
      <Common 
      name='Welcome to About Page'
       imgsrc="https://image.freepik.com/free-vector/isometric-business-people-meeting-illustration_23-2148324643.jpg" 
       visit='/contact' 
       btnName='Contact' />
            
    );
};

export default About;