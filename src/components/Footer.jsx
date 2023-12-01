import React from 'react'

const Footer = () => {
 return  (
  <div className="container-fluid d-flex justify-content-center align-items-center bg-dark text-white p-3 ">

  {/*News API */}
   <div className="container font-bold justify-content-center p-2 " style={{margin:"10px"}}>
      <b className="container-fluid foot-adj">News API</b>
      <h6 className="container-fluid foot"style={{color:"grey"}} >Get Started</h6>
      <h6 className="container-fluid foot"style={{color:"grey"}} >Documentation</h6>
      <h6 className="container-fluid foot"style={{color:"grey"}} >News Sources</h6>
      <h6 className="container-fluid foot"style={{color:"grey"}} >Pricing</h6>
      <h6 className="container-fluid foot"style={{color:"grey"}} >Google News API</h6>
    </div>
    
  {/*Company */}
  <div className="container font-bold">
    <b className="foot-adje">COMPANY</b>
    <h6 className="container-fluid foot"style={{color:"grey"}} >Privacy Policy</h6>
    <h6 className="container-fluid foot"style={{color:"grey"}} ></h6>
    <h6 className="container-fluid foot"style={{color:"grey"}} >Terms of Service</h6>      
  </div>
  
  {/*Suport */}
  <div className="container font-bold ">
    <b className="foot-adjec">SUPPORT</b>
    <h6 className="container-fluid foot"style={{color:"grey"}} >Facebook</h6>
    <h6 className="container-fluid foot"style={{color:"grey"}} >Twitter</h6>
    <h6 className="container-fluid foot"style={{color:"grey"}} >GitHub</h6>
  </div>

  {/*Contact Us */}
   <div className="container font-bold ">
     <b className="foot-adjec">CONTACT US</b>
     <h6 className="container-fluid foot"style={{color:"grey"}} >Mob. +118 6352 88</h6>
     <h6 className="container-fluid foot"style={{color:"grey"}} >Email: newsapi@org.in</h6>
     <h6 className="container-fluid foot"style={{color:"grey"}} ><a href='https://newsapi.org'>https://newsapi.org</a></h6>
   </div>
  </div>
  );
};
export default Footer;
