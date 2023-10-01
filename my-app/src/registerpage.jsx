import { useState } from 'react';
import { Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector"





   



function RegisterPage(props) {

  const data = useSelector((state) => state.apiData.localRegisteredData)
    console.log('data', data)
  
  
  // console.log("regData",data)

  



  const [firstName, setFirstName] = useState ("");
  const [lastName, setLastName] = useState ("");
  const [fatherName, setFatherName] = useState ("");
  const [aadhar, setAadhar] = useState ("");
  const [cityName, setCityName] = useState ("");
  const [district, setDistrict] = useState ("");
  const [pincode, setPincode] = useState ("");
  const [phoneNum, setPhoneNum] = useState ("");
  // const [image, setImage] = useState(null);

  const navigate = useNavigate()

  

  const registerFunction = () => {


    let obj = {
        firstName: firstName,
        lastName: lastName,
        fatherName: fatherName,
        aadhar: aadhar,
        cityName: cityName,
        district: district,
        pincode: pincode,
        phoneNum: phoneNum,
        // image: image
    }


    props.setRegisteredData([...props.registeredData, obj])
    message.success('Registered successfully');
}

// const handleImageChange = (e) => {
//   const selectedImage = e.target.files[0];
//   setImage(selectedImage);
// };

  

  return (
    <div style={{backgroundColor:"lightblue",display:"inline-block", boxSizing:"content-box",borderRadius:"25px", border: "solid #004c4c 2px",paddingBottom:"15px",width:"500px"}}>
      <h2 style={{color:"#005B5B"}}>Registration Form</h2>

        
        <div>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
            required
            style={{width: "40%", padding:"12px 20px", margin:"8px ",borderRadius:"15px", display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
            required
            style={{width: "40%", padding:"12px 20px", margin:"8px ",borderRadius:"15px",display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <Input
            type="text"
            name="fname"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => {setFatherName(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0",borderRadius:"15px", display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={(e) => {setAadhar(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0",borderRadius:"15px", display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        <div>
        <Input
            type="text"
            placeholder="Your City"
            value={cityName}
            onChange={(e) => {setCityName(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        <div>
        <Input
            type="text"
            placeholder="Your District"
            value={district}
            onChange={(e) => {setDistrict(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        <div>
        <Input
            type="text"
            placeholder="Your Pincode"
            value={pincode}
            onChange={(e) => {setPincode(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Mobile Number"
            value={phoneNum}
            onChange={(e) => {setPhoneNum(e.target.value)}}
            required
            style={{width: "83%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div>
        {/* <div>
          <label style={{marginRight:"10px", color:"#005B5B"}}><strong>Upload Your Image ---:-</strong></label>
          <Input
            type="file"
            alt="Profile Picture"
            accept="image/*"
            onChange={handleImageChange}
            style={{width: "45%", padding:"12px 20px", margin:"8px 0", borderRadius:"15px",display: "inline-block", border: "1px solid #004c4c", boxSizing:"border-box"}}
          />
        </div> */}
        <div>
          <button 
          type="submit"
          onClick={()=>{registerFunction()}}
          style={{backgroundColor:"#005B5B", color:"white", padding:"14px 20px", margin:"8px 0",borderRadius:"15px", border:"none", cursor: "pointer", width:"83%"}}
          >Submit
          </button>
        </div>
        <div>
          <button 
          onClick={()=>{navigate("/")}}
          style={{backgroundColor:"#005B5B", color:"white", padding:"14px 20px", margin:"8px 0",borderRadius:"15px", border:"none", cursor: "pointer", width:"83%"}}
          >Go to Login
          </button>
        </div>
    
    </div>
  );
}



export default RegisterPage;
