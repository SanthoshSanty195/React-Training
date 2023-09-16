import { useState } from 'react';
import {Button, Input} from 'antd'

function HomePage(props) {

  const [editableName, setEditableName] = useState('');
  const [editableAge, setEditableAge] = useState('')
  const [editableEmail, setEditableEmail] = useState('')
  const [editablePhone, setEditablePhone] = useState('')

  const [selectedIndex, setSelectedIndex] = useState(null)

  const onEdit = (indexNum) => {

    const selectedObj = props.registeredData[indexNum]
    setEditableName(selectedObj.name)
    setEditableAge(selectedObj.age)
    setEditableEmail(selectedObj.email)
    setEditablePhone(selectedObj.phone)
    setSelectedIndex(indexNum)
  }

  const update = () => {
    let obj = {
        name: editableName,
        age: editableAge,
        email: editableEmail,
        phone: editablePhone
    }

    let ouput = []

    for (let i in props.registeredData) {
        if (i != selectedIndex) {
            ouput.push(props.registeredData[i])
        } else {
            ouput.push(obj)
        }
    }

    props.setRegisteredData(ouput)

  }


  console.log(props.registeredData)
  return (
    <>
      <div style={{ backgroundColor: "lightblue", border:"solid #004c4c 2px",marginLeft:"50px", marginRight:"50px",borderRadius:"25px"}}>
        <h2 style={{ textAlign: "center", color: "#005B5B" }}>HomePage</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {props.registeredData.map((item, num) => (
            <div style={{ border: "solid #004c4c 2px", borderRadius: "15px", width: "250px", textAlign: "left",paddingLeft:"4px", backgroundColor: "#005B5B", color: "lightblue", margin: "10px" }}>
            <div style={{ fontFamily: "system-ui" }}>
              <div>Full Name     : {item.firstName + " " + item.lastName}</div>
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
                <div>Editable data</div>
                <div style={{margin:"20px 0px", width:"50%"}} >
                    <Input value={editableName} onChange={(e) => setEditableName(e.target.value)} ></Input>
                    <Input value={editableAge} onChange={(e) => setEditableAge(e.target.value)} ></Input>
                    <Input value={editableEmail} onChange={(e) => setEditableEmail(e.target.value)} ></Input>
                    <Input value={editablePhone} onChange={(e) => setEditablePhone(e.target.value)} ></Input>
                </div>
                <Button onClick={() => update()} >Update</Button>
            </div>
    </>
  );
}

export default HomePage;