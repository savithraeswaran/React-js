import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from "../Images/skct image 4.jpg"

const Home = () => {
  const navigate=useNavigate()
      const handleback= () =>{
    navigate("/Login")
      }
  return (
    <>
    <center>
    <h1>Welcome to skct</h1>
    <p>
    Nestled at the foothills of the Western Ghats, located in a sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna College of Technology (SKCT) is a vibrant institute of higher education established in 1985 promoted by Sri Krishna Institutions. An extraordinary freedom of opportunity—to explore, to collaborate and to challenge oneself is the hallmark of the Institute. Being an autonomous institute, affiliated to Anna University, Chennai, and approved by AICTE, New Delhi, SKCT lays strong emphasis on collaborative research and stands apart from other institutes by its participatory work culture, student care programmes and high industry interaction. In a span of 38 years, it has emerged as one of the premier engineering colleges for learning, discovery and innovation due to the dynamic leadership of the Chairperson and Managing Trustee Smt S Malarvizhi. Being an acclaimed educationalist, she continues to contribute profusely for the glory and happiness of advancing generations. The college is accredited with A Grade by NAAC and eligible undergraduate programs are accredited by the National Board of Accreditation (NBA), New Delhi. The college offers 11 undergraduate programmes and 6 postgraduate programmes in engineering, technology, and Management Studies.
    </p>
    <img src={img1}>

    </img>
    <br></br>
    <a href="https://www.skct.edu.in/#/"target="_blank">Click here!!!</a>
    <br></br>
    
    <button onClick={handleback}>back</button>
    </center>
    </>
      
  )
}

export default Home;
