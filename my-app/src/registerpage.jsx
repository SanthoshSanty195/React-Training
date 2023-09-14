import { useState } from 'react';



function RegisterPage(props) {
  const [firstName, setFirstName] = useState ("");
  const [lastName, setLastName] = useState ("");
  const [fatherName, setFatherName] = useState ("");
  const [joinDate, setJoinDate] = useState ("");
  const [roomNum, setRoomNum] = useState ("");
  const [occupation, setOccupation] = useState ("");
  const [aadhar, setAadhar] = useState ("");
  const [streetName, setStreetName] = useState ("");
  const [cityName, setCityName] = useState ("");
  const [district, setDistrict] = useState ("");
  const [pincode, setPincode] = useState ("");
  const [advAmount, setAdvAmount] = useState ("");
  const [phoneNum, setPhoneNum] = useState ("");


  const registerFunction = () => {


    let obj = {
        firstName: firstName,
        lastName: lastName,
        fatherName: fatherName,
        joinDate: joinDate,
        roomNum: roomNum,
        occupation: occupation,
        aadhar: aadhar,
        streetName: streetName,
        cityName: cityName,
        district: district,
        pincode: pincode,
        advAmount: advAmount,
        phoneNum: phoneNum
    }


    props.setRegisteredData([...props.registeredData, obj])
}

  

  return (
    <div style={{backgroundColor:"lightblue",display:"inline-block", boxSizing:"content-box",borderRadius:"25px", border: "solid grey 2px",paddingBottom:"15px",width:"500px"}}>
      <h2 style={{color:"darkblue"}}>Registration Form</h2>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
            required
            style={{width: "40%", padding:"12px 20px", margin:"8px ",borderRadius:"15px", display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
            required
            style={{width: "40%", padding:"12px 20px", margin:"8px ",borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="text"
            name="fname"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => {setFatherName(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0",borderRadius:"15px", display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Joining Date"
            value={joinDate}
            onChange={(e) => {setJoinDate(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0",borderRadius:"15px", display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room Number"
            value={roomNum}
            onChange={(e) => {setRoomNum(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="text"
            name="Occupation"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => {setOccupation(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={(e) => {setAadhar(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0",borderRadius:"15px", display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>import "react-datepicker/dist/react-datepicker.css";

        <div>
        <input
            type="text"
            placeholder="Your Street Name"
            value={streetName}
            onChange={(e) => {setStreetName(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Your City"
            value={cityName}
            onChange={(e) => {setCityName(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Your District"
            value={district}
            onChange={(e) => {setDistrict(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Your Pincode"
            value={pincode}
            onChange={(e) => {setPincode(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Advance Amount"
            value={advAmount}
            onChange={(e) => {setAdvAmount(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phoneNum}
            onChange={(e) => {setPhoneNum(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #ccc", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <button 
          type="submit"
          onClick={()=>{registerFunction()}}
          style={{backgroundColor:"green", color:"white", padding:"14px 20px", margin:"8px 0",borderRadius:"15px", border:"none", cursor: "pointer", width:"83%"}}
          >Submit
          </button>
        </div>
        <div>
          <button 
          onClick={()=>{props.setIsLogged("login")}}
          style={{backgroundColor:"green", color:"white", padding:"14px 20px", margin:"8px 0",borderRadius:"15px", border:"none", cursor: "pointer", width:"83%"}}
          >Go to Login
          </button>
        </div>
    
    </div>
  );
}



export default RegisterPage;