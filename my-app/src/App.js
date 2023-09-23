
import {useState} from "react"
import './App.css';
import PayPalLoginPage from './login'
import RegisterPage from './registerpage';
import HomePage from "./home";
import {Routes,Route} from "react-router-dom"


function App(){

  const [registeredData, setRegisteredData] = useState ([
      {
        firstName: "Santhosh",
        lastName: "Kumar",
        fatherName: "Selvakumar",
        aadhar: "95841652185",
        cityName: "Neyveli",
        district: "Cuddalore",
        pincode: "607807",
        phoneNum: "9488122061"
      },
      {
        firstName: "Guru",
        lastName: "Prasath",
        fatherName: "TamilSekar",
        aadhar: "9562646546",
        cityName: "WhiteTown",
        district: "Puducherry",
        pincode: "654856",
        phoneNum: "9566546216"
      },
      {
        firstName: "Ananda",
        lastName: "Krishna",
        fatherName: "Murugan",
        aadhar: "465465513",
        cityName: "kolliHills",
        district: "Namakkal",
        pincode: "845664",
        phoneNum: "9489377164"
      },
      {
        firstName: "Jaya",
        lastName: "Narayanan",
        fatherName: "Kasinathan",
        aadhar: "65846516",
        cityName: "indranagar",
        district: "Cuddalore",
        pincode: "651654",
        phoneNum: "6546545588"
      },
      {
        firstName: "Suriya",
        lastName: "P",
        fatherName: "Periyasamy",
        aadhar: "654864558",
        cityName: "Avadi",
        district: "Chennai",
        pincode: "5146549",
        phoneNum: "865465468"
      },
      {
        firstName: "Aravinth",
        lastName: "Parama",
        fatherName: "Paramasivam",
        aadhar: "84684651",
        cityName: "Ernakulam",
        district: "Cochin",
        pincode: "465894",
        phoneNum: "987456465"
      }
  ]);


  return (
    <>  
    <div style={{textAlign:"center",paddingTop:"50px", paddingBottom:"20px"}}>
    <Routes>
      <Route path="/" element={<PayPalLoginPage />}></Route>
      <Route path="/home-page" element={<HomePage registeredData={registeredData} setRegisteredData={setRegisteredData} />}></Route>
      <Route path="/register-page" element={<RegisterPage  registeredData={registeredData} setRegisteredData={setRegisteredData} />}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App;
















// import React, { useState } from "react";

// function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const carouselData = [
//     {
//       title: 'Build Apps Effortlessly',
//       description: 'Use A8Studio’s visual low-code platform to effortlessly build robust applications, boosting your business efficiency.',
//     },
//     {
//       title: 'Streamline Workflows',
//       description: 'Streamline your tasks! The A8Studio platform lets you seamlessly automate processes, saving you valuable time and money.',
//     },
//     {
//       title: 'Visual Low-Coding',
//       description: 'Limited coding know-how? No problem! A8St.'
//     }
//   ];

//   const handleButtonClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//   };

//   return (
//     <div>
//       <h1>{carouselData[currentIndex].title}</h1>
//       <p>{carouselData[currentIndex].description}</p>
//       <button onClick={handleButtonClick}>Next</button>
//     </div>
//   );
// }

// export default App;










// import React, { useState, useEffect } from "react";

// function CarouselItem({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }

// function App() {
//   const carouselData = [
//     {
//       title: 'Build Apps Effortlessly',
//       description: 'Use A8Studio’s visual low-code platform to effortlessly build robust applications, boosting your business efficiency.',
//     },
//     {
//       title: 'Streamline Workflows',
//       description: 'Streamline your tasks! The A8Studio platform lets you seamlessly automate processes, saving you valuable time and money.',
//     },
//     {
//       title: 'Visual Low-Coding',
//       description: 'Limited coding know-how? No problem! A8St.'
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 1000); // Switch to the next item every 1 second (1000 milliseconds)

//     return () => clearInterval(interval); // Clear the interval when the component unmounts
//   }, [currentIndex]);

//   return (
//     <div>
//       <CarouselItem {...carouselData[currentIndex]} />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// }

// export default App;









































