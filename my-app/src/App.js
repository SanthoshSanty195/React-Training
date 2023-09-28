
import {useState, useEffect} from "react"
import './App.css';
import PayPalLoginPage from './login'
import RegisterPage from './registerpage';
import HomePage from "./home";
import {Routes,Route} from "react-router-dom"
import axios from 'axios';


function App(){

  const [registeredData, setRegisteredData] = useState ([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data)
      setRegisteredData(response.data)
    }).catch((err) => {
      console.log({err})
    })
  }, [])


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















// {
//   firstName: "Santhosh",
//   lastName: "Kumar",
//   fatherName: "Selvakumar",
//   aadhar: "95841652185",
//   cityName: "Neyveli",
//   district: "Cuddalore",
//   pincode: "607807",
//   phoneNum: "9488122061"
// },
// {
//   firstName: "Guru",
//   lastName: "Prasath",
//   fatherName: "TamilSekar",
//   aadhar: "9562646546",
//   cityName: "WhiteTown",
//   district: "Puducherry",
//   pincode: "654856",
//   phoneNum: "9566546216"
// },
// {
//   firstName: "Ananda",
//   lastName: "Krishna",
//   fatherName: "Murugan",
//   aadhar: "465465513",
//   cityName: "kolliHills",
//   district: "Namakkal",
//   pincode: "845664",
//   phoneNum: "9489377164"
// },
// {
//   firstName: "Jaya",
//   lastName: "Narayanan",
//   fatherName: "Kasinathan",
//   aadhar: "65846516",
//   cityName: "indranagar",
//   district: "Cuddalore",
//   pincode: "651654",
//   phoneNum: "6546545588"
// },
// {
//   firstName: "Suriya",
//   lastName: "P",
//   fatherName: "Periyasamy",
//   aadhar: "654864558",
//   cityName: "Avadi",
//   district: "Chennai",
//   pincode: "5146549",
//   phoneNum: "865465468"
// },
// {
//   firstName: "Aravinth",
//   lastName: "Parama",
//   fatherName: "Paramasivam",
//   aadhar: "84684651",
//   cityName: "Ernakulam",
//   district: "Cochin",
//   pincode: "465894",
//   phoneNum: "987456465"
// }