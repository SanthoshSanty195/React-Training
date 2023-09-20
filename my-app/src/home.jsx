import { useState } from 'react';
import {Button} from 'antd';

function HomePage(props) {

  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editFatherName, setEditFatherName] = useState('');
  const [editAadhar, setEditAadhar] = useState('');
  const [editCityName, setEditCityName] = useState ('');
  const [editDistrict, setEditDistrict] = useState ('');
  const [editPincode, setEditPincode] = useState('');
  const [editPhone, setEditPhone] = useState('');

  const [selectedIndex, setSelectedIndex] = useState(null);

  console.log(props.registeredData);

  const onEdit = (indexNum) => {

    const selectedObj = props.registeredData[indexNum]
    setEditFirstName(selectedObj.firstName)
    setEditLastName(selectedObj.lastName)
    setEditFatherName(selectedObj.fatherName)
    setEditAadhar(selectedObj.aadhar)
    setEditCityName(selectedObj.cityName)
    setEditDistrict(selectedObj.district)
    setEditPincode(selectedObj.pincode)
    setEditPhone(selectedObj.phoneNum)
    setSelectedIndex(indexNum)
}

const update = () => {
    let obj = {
        firstName: editFirstName,
        lastName: editLastName,
        fatherName: editFatherName,
        aadhar: editAadhar,
        cityName: editCityName,
        district: editDistrict,
        pincode: editPincode,
        phoneNum: editPhone
    }

    let output = []

    for (let i in props.registeredData) {
        if (i != selectedIndex) {
            output.push(props.registeredData[i])
        } else {
            output.push(obj)
        }
    }

    props.setRegisteredData(output)
}

console.log(props.registeredData)

  return (
    <>
      <div style={{ backgroundColor: "lightblue", border:"solid #004c4c 2px",marginLeft:"50px", marginRight:"50px",borderRadius:"25px"}}>
        <h2 style={{ textAlign: "center", color: "#005B5B" }}>HomePage</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {props.registeredData.map((item, num) => (
            <div key={num} style={{ border: "solid #004c4c 2px", borderRadius: "15px", width: "250px", textAlign: "left",paddingLeft:"4px", backgroundColor: "#005B5B", color: "lightblue", margin: "10px" }}>
            <div style={{ fontFamily: "system-ui" }}>
              <div>First Name    : {item.firstName}</div>
              <div>Last Name     : {item.lastName}</div>
              <div>Father Name   : {item.fatherName}</div>
              <div>Aadhar        : {item.aadhar}</div>
              <div>City          : {item.cityName}</div>
              <div>District      : {item.district}</div>
              <div>Pincode       : {item.pincode}</div>
              <div>Mobile Number : {item.phoneNum}</div>
            </div>
            <div>
                <Button onClick={() => onEdit(num)} >Edit</Button>
                <Button>Delete</Button>
            </div>
          </div> 
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            style={{ backgroundColor: "#005B5B", color: "white", padding: "14px 20px", margin: "8px 0", borderRadius: "10px", border: "none", cursor: "pointer", width: "15%" }}
            onClick={() => {
              props.setIsLogged("login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      
           

            <div>
              <div>Updating Data</div>
                <div style={{margin:"20px 0px", width:"50%",display:"flex", flexDirection:"column"}} >
                    <input value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} ></input>
                    <input value={editLastName} onChange={(e) => setEditLastName(e.target.value)} ></input>
                    <input value={editFatherName} onChange={(e) => setEditFatherName(e.target.value)} ></input>
                    <input value={editAadhar} onChange={(e) => setEditAadhar(e.target.value)} ></input>
                    <input value={editCityName} onChange={(e) => setEditCityName(e.target.value)} ></input>
                    <input value={editDistrict} onChange={(e) => setEditDistrict(e.target.value)} ></input>
                    <input value={editPincode} onChange={(e) => setEditPincode(e.target.value)} ></input>
                    <input value={editPhone} onChange={(e) => setEditPhone(e.target.value)} ></input>
                </div>
                <button onClick={() => update()} >Update</button>
            </div>
            
            
    </>
  );
}

export default HomePage;