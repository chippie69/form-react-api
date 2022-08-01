import "../App.css";
// import ".Components/Form.css";
import React from "react";
// import { useForm } from "react-hook-form";
import { useState } from "react";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// const axios = require('axios');
// const https = require('https');

import axios from "D:/New folder/myreact/node_modules/axios";
import https from "https";
// const schema = yup.object().shape({
//     idCard: yup.number().max(13).required(),
//     phoneNum: yup.number().max(10).required()
// })

const Form = () => {
  // const { register, handleSubmit } = useForm({
  //     // resolver: yupResolver(schema),

  // });
  

  const [idCard, setIdCard] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //const data = { idCard, phoneNum };
    
    const instance = axios.create({
        httpsAgent: new https.Agent({  
            rejectUnauthorized: false
        })
    });
    instance.post("https://192.168.200.4:4434/ProcessLineApi/verifyBBL", {
        IDCard : "1650800013495",
        TelephoneNumber : "097-2093726",
        Token:"eyJraWQiOiJhMmE0NTlhZWM1YjY1ZmE0ZThhZGQ1Yzc2OTdjNzliZTQ0NWFlMzEyYmJjZDZlZWY4ZmUwOWI1YmI4MjZjZjNkIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2FjY2Vzcy5saW5lLm1lIiwic3ViIjoiVTdhZTI5MGVmMGIyZWUxMGQ5OTJjOWQ2OTU1MTBhZTQxIiwiYXVkIjoiMTY1NzEyMzAyNSIsImV4cCI6MTY1NzUwODI1NywiaWF0IjoxNjU3NTA0NjU3LCJhbXIiOlsibGluZXNzbyJdLCJuYW1lIjoiIeC5gOC4iOC4oeC4quC5jOC4hOC4o-C4seC4miAg8J-SviIsInBpY3R1cmUiOiJodHRwczovL3Byb2ZpbGUubGluZS1zY2RuLm5ldC8waGE1TzZndVZjUGhweVR4ZHlvQk5CVFU0S01IY0ZZVGhTQ2lzamUxQklNM2hYTFg5TkhYNG1MMVlZTlg5YWYzQWZTaXQyTDFKTVppb0wifQ.8HPal0Ptk67aqBKSsLSyLKwsBhF-Vc_9UcaJ_j3v1BMamE5ugIGn6hMfSD9rHKOOJHk1G3njpJ2cYZcSk9m3Xw"
    },
    )
    .then((response) => response.json())
    .then((json) => console.log(json));
  };

  //const onSubmit = (data) => console.log(data);

  return (
    <div className="Form">
      <div className="title">Form</div>
      <form className="form" onSubmit={handleSubmit}>
        <label>หมายเลขบัตรประชาชน</label>
        <input className="ele-form"
          type="number"
          required
          onChange={(e) => setIdCard(e.target.value)}
        />
        <label>หมายเลขโทรศัพท์</label>
        <input className="ele-form"
          type="number"
          required
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <button>send</button>
      </form>
      {/* <form className="form" onSubmit={ handleSubmit(onSubmit) }>
                <input className="ele-form" {... register("idCard") }/>
                
                <input className="ele-form" {... register("phoneNum") } />
                
                <input className="ele-form" type="submit" />
            </form> */}
    </div>
  );
};

// function Form() {

//     const { register, handleSubmit } = useForm({
//         resolver: yupResolver(schema)
//     });
//     const onSubmit = data => console.log(data);

//     return (
//         <div className="Form">
//             <div className="title">Form</div>
//             <form onSubmit={ handleSubmit(onSubmit) }>
//                 <input type="text" name="idCard" placeholder="หมายเลขบัตรประชาชน" ref={ register } />
//                 <input type="text" name="phoneNum" placeholder="หมายเลขโทรศัพท์" ref={ register } />
//                 <input type="submit" />
//             </form>
//         </div>
//     );
// }
// export default Form;

// const Form = () => {
//     return ("hello");
// }

export default Form;
