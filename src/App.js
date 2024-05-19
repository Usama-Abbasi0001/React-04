
import { useState } from 'react';
import './App.css';
import StateEffect from './StateEffect';

function App() {

  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [father, setFather] = useState('')
  const [adrees, setAdrees] = useState('')
  const [pass, setPass] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
    console.log(name);
  }
  const emailHandleChange = (event) => {
    setEmail(event.target.value)
    console.log(email);
  }
  const fatherHandleChange = (event) => {
    setFather(event.target.value)
    console.log(father);
  }
  const passHandleChange = (event) => {
    setPass(event.target.value)
    console.log(pass);
  }

  const adreesHandleChange = (event) => {
    setAdrees(event.target.value)
    console.log(adrees);
  }


  return (
    <>
        <legend>CUSTOMER INFO</legend> 
           NAME:* <input type="name" value={name} onChange={handleChange} placeholder="name.."/>
           {name}
        <p>FATHER:* <input type="father" value={father} onChange={fatherHandleChange}  placeholder="farhers.."/></p>
        {father}
        <p>ADRESS:* <input type="adress" value={adrees} onChange={adreesHandleChange}   placeholder="adress.."/></p>
        {adrees}
        <p>GENDER:*</p> 
            <input type="radio" name="gender" />Male
            <input type="radio" name="gender"/>Female
            <p>PASSWORD:* <input type="password" value={pass} onChange={passHandleChange}   name="password" id="password" placeholder="pass.."/></p>
            
           <p> Email:*  <input type="email" name="email" value={email} onChange={emailHandleChange} id="email" placeholder="email.."/></p>
           {email}
           <StateEffect />
           </>
  );
}

export default App;
