
import {useState} from "react"
import './App.css';



function App(){

let [name, setName] = useState("")
let [age, setAge] = useState(null)
let [email, setEmail] = useState("");

let [users, setUsers] = useState([])

const button_onClick = () => {
  let obj = {
    user_name: name,
    user_age: age,
    user_email: email
  }

setUsers(prev => [...prev, obj])
console.log(users)

}

  return (
    <div>
      <input onChange={ (event) =>{ setName(event.target.value)}} style={{margin: "20px"}} placeholder="Enter name"></input>
      <input onChange={ (event) =>{ setAge(event.target.value)}} style={{margin: "20px"}} placeholder="Enter age"></input>
      <input onChange={ (event) =>{ setEmail(event.target.value)}} style={{margin: "20px"}} placeholder="Enter email"></input>
    {/* <div style={{display:"flex", flexDirection:"column", fontSize: "25px", alignItems: "center", background: "blue"}}>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h1>Email: {email}</h1>
    </div> */}
    <button style={{padding: "10px",margin:"25px",width: "50%", background:"red", color:"black", fontSize: "12px", align: "center"}} onClick={ () =>{ button_onClick() } }>
      Click
      </button>

      <div>
        <div>Users List:</div>
        <div> {users.map( (data) => {
          return (
            <>
            <div>
              <div>User Name: {data.user_name}</div>
              <div>User Age: {data.user_age}</div>
              <div>User Email: {data.user_email}</div>
            </div>
            </>
          )
        })} </div>
      </div>
    </div>
  )
}

export default App;
