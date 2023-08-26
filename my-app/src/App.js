
import './App.css';



function App() {

let name = "Luffy";
let age = "22";
let mailId = "luffy@gmail.com";



  return (
    <div>
    <div style={{display:"flex", flexDirection:"column", fontSize: "30px", alignItems: "center", background: "blue"}}>
      <input placeholder="Enter your id"></input>
      <input placeholder="Enter your password"></input>
      <button>Login</button>
    </div>
    <div style={{display:"flex", flexDirection:"column", fontSize: "30px", alignItems: "center", background: "blue"}}>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h1>Email: {mailId}</h1>
    </div>
    </div>
  )
}

export default App;
