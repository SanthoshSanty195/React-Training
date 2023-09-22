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








