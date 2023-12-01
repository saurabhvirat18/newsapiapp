//import React, { useLayoutEffect } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const FetchData = ({cat}) => {
  const[Data,setData]= useState("");
  const[query,setQuery]= useState("");
   
let updatedQuery
  const clickHandler = () => {
    updatedQuery= query.toLowerCase()
    if(updatedQuery==="INDIA" || updatedQuery==="india" || updatedQuery==="India" || updatedQuery==="ind" ) updatedQuery="in";
    else if(updatedQuery==="USA" || updatedQuery==="usa" || updatedQuery==="UNITED STATE OF AMERICA" || updatedQuery==="united state america" ) updatedQuery="us";
    else if(updatedQuery==="CHINA" || updatedQuery==="China" || updatedQuery==="china") updatedQuery="cn";
    else if(updatedQuery==="FRANCE" || updatedQuery==="France" || updatedQuery==="france" ) updatedQuery="fr";
    else if(updatedQuery==="GERMANY" || updatedQuery==="Germany" || updatedQuery==="germany" ) updatedQuery="de";
    else if(updatedQuery==="ISRAEL" || updatedQuery==="Israel" || updatedQuery==="israel") updatedQuery="il";
    else if(updatedQuery==="UKRAINE" || updatedQuery==="Ukraine" || updatedQuery==="ukraine") updatedQuery="ua";
    else if(updatedQuery==="RUSSIA" || updatedQuery==="Russia" || updatedQuery==="russia") updatedQuery="ru";
    else if(updatedQuery==="UAE" || updatedQuery==="Uae" || updatedQuery==="uae" || updatedQuery==="United Arab Emirates" ) updatedQuery="ae";
    else if(updatedQuery==="SOUTH AFRICA" || updatedQuery==="South Africa" || updatedQuery==="south africa" || updatedQuery==="SA" ) updatedQuery="za";
    else if(updatedQuery==="JAPAN" || updatedQuery==="Japan" || updatedQuery==="japan") updatedQuery="jp";
    else if(updatedQuery==="ITALY" || updatedQuery==="Italy" || updatedQuery==="italy") updatedQuery="it";
    else if(updatedQuery==="UNITED KINGDOM" || updatedQuery==="United Kingdom" || updatedQuery==="united kingdom") updatedQuery="uk";
    else if(updatedQuery==="NEW ZEALAND" || updatedQuery==="New Zealand" || updatedQuery==="new zealand") updatedQuery="nz";
    else if(updatedQuery==="SOUTH KOREA" || updatedQuery==="South Korea" || updatedQuery==="south korea") updatedQuery="kr";

  axios.get(
    cat ? `https://newsapi.org/v2/top-headlines?country=${updatedQuery}&category=${cat}&apiKey=02315ac27ebb4a08b089d87076cf61ff`
      : `https://newsapi.org/v2/top-headlines?country=${updatedQuery}&apiKey=02315ac27ebb4a08b089d87076cf61ff`
  ).then((res) => setData(res.data.articles));  
}
    
useEffect(() => {
  const fetchData= () =>{
    axios.get(
      cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=02315ac27ebb4a08b089d87076cf61ff`
        : `https://newsapi.org/v2/top-headlines?country=in&apiKey=02315ac27ebb4a08b089d87076cf61ff`
    ).then((res) => setData(res.data.articles));  
  }   
  fetchData();    
}, [cat]);


return (
  <div className="container my-4">
    <h3 className="container font-bold d-flex justify-content-center " style={{color:"grey"}}>
        NEWS HEADLINES
    </h3>

    <form className="input-div" onSubmit={clickHandler}>
      <div className="search-box">
          <input onChange={(e)=>setQuery(e.target.value)} className="search-input" type="text" name="" placeholder='Search Filter' />
      </div>      
      <img onClick={clickHandler} className="arrow-image" src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-290_arrow_right-512.png" alt=""/>
    </form>
   

<div className="container d-flex justify-content-center align-text-center flex-column my-20 news-container" style={{minHeight:"100vh"}}>
    {Data ? Data.map((items, index) => (
<>
  <div className="container my-3 p-3" style={{width:"600px", boxShadow:"4px 4px 10px grey", borderRadius:"10px"}}>
    <h5 className="my-2">
        {items.title}
    </h5>
  <div className="d-flex justify-content-center align-text-center">
    <img 
      src={items.urlToImage} 
      alt="Image Not Found" 
      className="img-fluid" 
      style={{width:"100%", 
      height:"300px", 
      objectFit:"cover"}} 
    />
  </div>
    <p className="my-2">{items.description}</p>
    <div class="inline-flex items-center px-4 py-1 font-medium dark:bg-blue">
    <a href={items.url} target="blank">Read More</a>
    </div>
  </div>
  </>
    )):"Loading Please Wait..."}
    </div>
   </div>
  ); 
};
export default FetchData
