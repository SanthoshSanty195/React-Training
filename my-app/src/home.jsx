import { useState } from 'react';
import {Button,Input, Modal} from 'antd';
import { useNavigate } from 'react-router-dom';

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
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate()


  const onEdit = (indexNum) => {

    setIsOpen(true);

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
    setIsOpen(false);
}


const onDelete = (indexNum) => {
  let output = [];

  for (let i in props.registeredData){
    if (i != indexNum){
      output.push(props.registeredData[i])
    }
  }
  props.setRegisteredData(output)
}



  return (
    <>
      <div style={{ backgroundColor: "lightblue", border:"solid #004c4c 2px",marginLeft:"50px", marginRight:"50px",borderRadius:"25px"}}>
        <h2 style={{ textAlign: "center", color: "#005B5B" }}>HomePage</h2>

        <div>
          <Input 
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{width:"250px", border: "solid #004c4c 1px"}}
          ></Input>
        </div>


        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {props.registeredData
          .filter((item) => search === "" || search === item.firstName)
          .map((item, num) => {
            console.log(item)
            return(
              <div key={num} style={{ border: "solid #004c4c 2px", borderRadius: "15px", width: "300px", textAlign: "left", padding: "20px", backgroundColor: "#1db597", color: "#333", margin: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                <div style={{ marginBottom: "10px" }}>
                  <img 
                  alt='Profile Pic'
                  src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png'
                  style={{ maxWidth: "100%", maxHeight: "150px", paddingLeft:"10px"}}
                  />
                  <div><strong>First Name:</strong> {item.firstName}</div>
                  <div><strong>Last Name:</strong> {item.lastName}</div>
                  <div><strong>Father Name:</strong> {item.fatherName}</div>
                  <div><strong>Aadhar:</strong> {item.aadhar}</div>
                  <div><strong>City:</strong> {item.cityName}</div>
                  <div><strong>District:</strong> {item.district}</div>
                  <div><strong>Pincode:</strong> {item.pincode}</div>
                  <div><strong>Mobile Number:</strong> {item.phoneNum}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button onClick={() => onEdit(num)} style={{ marginRight: "10px", borderRadius: "15px", border: "solid #004c4c 2px",  }}>Edit</Button>
                  <Button onClick={() => onDelete(num)} style={{ borderRadius: "15px", border: "solid #004c4c 2px",backgroundColor:"red",color:"white" }}>Delete</Button>
                </div>
             </div>
              )
          })}
        </div>
        <Modal
        open={isOpen}
        title="Edit The Data"
        onOk={update}
        onCancel={()=>{setIsOpen(false)}}>
          <div>
            <Input value={editFirstName} placeholder='First Name' onChange={(e) => setEditFirstName(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editLastName} placeholder='Last Name' onChange={(e) => setEditLastName(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editFatherName} placeholder='Father Name' onChange={(e) => setEditFatherName(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editAadhar} placeholder='Aadhar' onChange={(e) => setEditAadhar(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editCityName} placeholder='Your City' onChange={(e) => setEditCityName(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editDistrict} placeholder='Your District' onChange={(e) => setEditDistrict(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editPincode} placeholder='Your Pincode' onChange={(e) => setEditPincode(e.target.value)} style={{width:"50%", margin:"3px"}} />
            <Input value={editPhone} placeholder='Mobile Number' onChange={(e) => setEditPhone(e.target.value)} style={{width:"50%", margin:"3px"}} />
          </div>
        </Modal>

        <div style={{ textAlign: "center" }}>
          <button
            style={{ backgroundColor: "#005B5B", color: "white", padding: "14px 20px", margin: "8px 0", borderRadius: "10px", border: "none", cursor: "pointer", width: "15%" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>       
    </>
  );
}

export default HomePage;