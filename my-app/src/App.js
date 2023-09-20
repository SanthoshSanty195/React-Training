import {useState} from "react"
import './App.css';
import PayPalLoginPage from './login'
import RegisterPage from './registerpage';
import HomePage from "./home";


function App(){

  const [isLogged, setIsLogged] = useState("login");
  const [registeredData, setRegisteredData] = useState ([]);

  return (
    <>   
    <div>
    <div style={{textAlign:"center",paddingTop:"50px"}}>
      {isLogged === "login" && <PayPalLoginPage isLogged={isLogged} setIsLogged={setIsLogged} />}
    </div>
    <div>
      {isLogged === "home" && <HomePage registeredData={registeredData} setRegisteredData={setRegisteredData} setIsLogged={setIsLogged} />}
    </div>
    </div>
    <div>
    <div style={{textAlign:"center", paddingBottom:"20px"}}>
    {isLogged === 'register' && <RegisterPage  registeredData={registeredData} setRegisteredData={setRegisteredData} setIsLogged={setIsLogged} />}
    </div>
    </div>
    </>
  )
}

export default App;







// {
//   "firstName": "Santhosh",
//   "lastName": "Kumar",
//   "fatherName": "Selvakumar",
//   "aadhar": "65294187465",
//   "cityName": "Neyveli",
//   "district": "Cuddalore",
//   "pincode": "607807",
//   "phoneNum": "9488122061"
// },
// {
//   "firstName": "Suresh",
//   "lastName": "Kumar",
//   "fatherName": "Vinay",
//   "aadhar": "65294525485",
//   "cityName": "Vandalur",
//   "district": "Chennai",
//   "pincode": "605657",
//   "phoneNum": "9488854061"
// },
// {
//   "firstName": "sgtestbg",
//   "lastName": "sbgdsnfb",
//   "fatherName": "sbdbsgd",
//   "aadhar": "657444187465",
//   "cityName": "Whitetown",
//   "district": "Pondicherry",
//   "pincode": "604507",
//   "phoneNum": "9488122847"
// },
// {
//   "firstName": "mukesh",
//   "lastName": "Kumar",
//   "fatherName": "bharath",
//   "aadhar": "65279437465",
//   "cityName": "panruti",
//   "district": "Cuddalore",
//   "pincode": "6471897",
//   "phoneNum": "7458613237"
// },
// {
//   "firstName": "manoj",
//   "lastName": "Kumar",
//   "fatherName": "maheshkumar",
//   "aadhar": "65462987465",
//   "cityName": "Neyveli",
//   "district": "Cuddalore",
//   "pincode": "607807",
//   "phoneNum": "9488122061"
// }
