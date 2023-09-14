
import {useState} from "react"
import './App.css';
import PayPalLoginPage from './login'
import RegisterPage from './registerpage';
import HomePage from "./home";


function App(){

  let [isLogged, setIsLogged] = useState("login");
  const [registeredData, setRegisteredData] = useState ([]);


  return (
    <>
    <div style={{backgroundColor:"#0070BA"}}>
    <div style={{textAlign:"center",paddingTop:"50px"}}>
      {isLogged === "login" && <PayPalLoginPage isLogged={isLogged} setIsLogged={setIsLogged} />}
    </div>
    <div style={{textAlign:"center"}}>
      {isLogged === "home" && <HomePage registeredData={registeredData} setIsLogged={setIsLogged} />}
    </div>
    </div>
    <div style={{backgroundColor:"#0070BA"}}>
    <div style={{textAlign:"center", paddingBottom:"20px"}}>
    {isLogged === 'register' && <RegisterPage  registeredData={registeredData} setRegisteredData={setRegisteredData} setIsLogged={setIsLogged} />}
    </div>
    </div>
    </>
  )
}

export default App;
