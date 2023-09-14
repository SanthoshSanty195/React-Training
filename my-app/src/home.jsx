

function HomePage (props) {
    return (
        <>
        <div>
            <h2>This is Home Component!!</h2>
            <div>
            {
                    props.registeredData.map((item) => {
                        return (
                            <div>
                                <div>Full Name: {item.firstName+" "+item.lastName}</div>
                                <div>Father Name: {item.fatherName}</div>
                                <div>Join Date : {item.joinDate}</div>
                                <div>Room Number: {item.roomNum}</div>
                                <div>Occupation: {item.occupation}</div>
                                <div>Aadhar: {item.aadhar}</div>
                                <div>Street Name: {item.streetName}</div>
                                <div>City Name: {item.cityName}</div>
                                <div>District: {item.district}</div>
                                <div>Pincode: {item.pincode}</div>
                                <div>Advance Amount: {item.advAmount}</div>
                                <div>Mobile Number: {item.phoneNum}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={()=>{props.setIsLogged("login")}}>Logout</button>
            </div>
        </div>
        </>
    )
}

export default HomePage;