import paypal from './paypal.png';
import { useState } from "react";


const PayPalLoginPage = (props) => {

  let userName = "luffy";
  let access = "meat";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableError, setEnableError] = useState(false);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const buttonChange = ()=>{
    if(userName === email && access === password){
      props.setIsLogged("home")
    }else{
      setEnableError(true)
    } 
  }

  return (
    <div style={{backgroundColor:"lightblue",display:"inline-block", boxSizing:"content-box",borderRadius:"25px", border: "solid #0070BA 2px",paddingBottom:"15px",width:"500px"}}>

       <div>
        <img src={paypal} alt="logo" style={{width:"20%", maxHeight:"10%"}} />
       </div>
        
       <div>
        <input type="email" value={email} onChange={emailChange} placeholder="Enter your email" required style={{width: "60%", padding:"12px 20px", margin:"8px 0", display: "inline-block",borderRadius:"10px", border: "1px solid #0070BA", boxSizing:"border-box"}} />
       </div> 
        
       <div>
        <input type="password" value={password} onChange={passwordChange} placeholder="Enter your password" required style={{width: "60%", padding:"12px 20px", margin:"8px 0", display: "inline-block",borderRadius:"10px", border: "1px solid #0070BA", boxSizing:"border-box"}} />
       </div> 
        
       <div>
       {enableError === true && <div style={{ fontSize: "12px", color: "red" }} >Username and password are not valid</div>}
        <button type="submit" onClick={buttonChange}  style={{backgroundColor:"#0070BA", color:"white", padding:"14px 20px", margin:"8px 0",borderRadius:"10px", border:"none", cursor: "pointer", width:"60%"}}>Login</button>
       </div> 

       <div>
        <button onClick={()=>{props.setIsLogged("register")}} style={{backgroundColor:"#0070BA", color:"white", padding:"14px 20px", margin:"8px 0",borderRadius:"10px", border:"none", cursor: "pointer", width:"60%"}}>Register Here</button>
       </div>
        
    </div>
  );
};

export default PayPalLoginPage;






















