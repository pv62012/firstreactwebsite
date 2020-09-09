import React from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Common from './Common';

const Home=()=>{
    return(
    
      <Common 
      name='Grow Your Business with'
       imgsrc="https://image.freepik.com/free-vector/launching-concept-illustration_114360-2990.jpg" 
      visit='/service'
       btnName='Get Started' />
            
    );
};

export default Home;