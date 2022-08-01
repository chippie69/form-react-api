import "./App.css";
// import { useState } from "react";

function App() {


  // const [idCard, setIdCard] = useState("");
  // const [phoneNum, setPhoneNum] = useState("");
  
  //const [message, setMessage] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://192.168.200.4:4434/ProcessLineApi/verifyBBL", {
      method: "POST",
      body: JSON.stringify({
        IDCard: "1650800013495",
        TelephoneNumber: "097-2093726",
        Token:
          "eyJraWQiOiJhMmE0NTlhZWM1YjY1ZmE0ZThhZGQ1Yzc2OTdjNzliZTQ0NWFlMzEyYmJjZDZlZWY4ZmUwOWI1YmI4MjZjZjNkIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2FjY2Vzcy5saW5lLm1lIiwic3ViIjoiVTdhZTI5MGVmMGIyZWUxMGQ5OTJjOWQ2OTU1MTBhZTQxIiwiYXVkIjoiMTY1NzEyMzAyNSIsImV4cCI6MTY1NzUwODI1NywiaWF0IjoxNjU3NTA0NjU3LCJhbXIiOlsibGluZXNzbyJdLCJuYW1lIjoiIeC5gOC4iOC4oeC4quC5jOC4hOC4o-C4seC4miAg8J-SviIsInBpY3R1cmUiOiJodHRwczovL3Byb2ZpbGUubGluZS1zY2RuLm5ldC8waGE1TzZndVZjUGhweVR4ZHlvQk5CVFU0S01IY0ZZVGhTQ2lzamUxQklNM2hYTFg5TkhYNG1MMVlZTlg5YWYzQWZTaXQyTDFKTVppb0wifQ.8HPal0Ptk67aqBKSsLSyLKwsBhF-Vc_9UcaJ_j3v1BMamE5ugIGn6hMfSD9rHKOOJHk1G3njpJ2cYZcSk9m3Xw",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          value={idCard}
          placeholder="หมายเลขบัตรประชาชน"
          onChange={(e) => setIdCard(e.target.value)}
        />
        <input
          type="text"
          value={phoneNum}
          placeholder="หมายเลขโทรศัพท์"
          onChange={(e) => setPhoneNum(e.target.value)}
        />
         */}

        <button type="submit">ตรวจสอบ</button>

        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
      </form>
    </div>
  );
}

export default App;
