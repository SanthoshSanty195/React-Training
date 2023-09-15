

function HomePage(props) {
  return (
    <>
      <div style={{ backgroundColor: "lightblue", border:"solid #004c4c 2px",marginLeft:"50px", marginRight:"50px",borderRadius:"25px"}}>
        <h2 style={{ textAlign: "center", color: "#005B5B" }}>HomePage</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {props.registeredData.map((item) => (
            <div style={{ border: "solid #004c4c 2px", borderRadius: "15px", width: "250px", textAlign: "center", backgroundColor: "#005B5B", color: "lightblue", margin: "10px" }}>
            <div style={{ fontFamily: "system-ui" }}>
              <div>Full Name     : {item.firstName + " " + item.lastName}</div>
              <div>Father Name   : {item.fatherName}</div>
              <div>Join Date     : {item.joinDate}</div>
              <div>Room Number   : {item.roomNum}</div>
              <div>Occupation    : {item.occupation}</div>
              <div>Aadhar        : {item.aadhar}</div>
              <div>Street Name   : {item.streetName}</div>
              <div>City          : {item.cityName}</div>
              <div>District      : {item.district}</div>
              <div>Pincode       : {item.pincode}</div>
              <div>Advance Amount: {item.advAmount}</div>
              <div>Mobile Number : {item.phoneNum}</div>
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
    </>
  );
}

export default HomePage;