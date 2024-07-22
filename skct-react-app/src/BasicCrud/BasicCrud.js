import axios from 'axios';
import React, { useEffect, useState } from 'react'
const BasicCrud = () => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, SetError] = useState(null);
    useEffect(() => {
      const fetchData =async () =>{
        try{
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1"
            .then(response=>{
              setData(response.data[0].id);
            })
          )
    } catch (error){
      console.log("error=======>>>>>>>>>",error)
      SetError(error.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }  
  }    
  fetchData();
},[]); 
  return (
    <div>
        {error && (
          <p style={{color: "red",fontSize: "16px",fontWeight: "bold"}}>
            you have an error: {error}
          </p>
        )} 
        <h1>{data}</h1>
        <h1>{loading}</h1>     
    </div>
  )}
      

export default BasicCrud