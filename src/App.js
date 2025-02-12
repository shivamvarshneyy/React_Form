import React, { useState } from 'react';
import './index.css';

function App() {
  const [Deatails, setFullDetails] = useState({
    fname : '',
    lname : '',
    email : '',
    mobile : ''
  });

 

    const inputEvent = (event) => {
      const { name, value } = event.target;
    
      setFullDetails((preValue) => ({
        ...preValue,  // Keep the old values
        [name]: value,  // Update only the changed field
      }));
    };

  

    // const inputEvent = (event)=>{

    // const value = event.target.value;
    // const name = event.target.name;

    // setFullDetails((preValue)=>{
    //   if(name === 'fname'){
    //     return{
    //       fname : value,
    //       lname : preValue.lname,
    //       email : preValue.email,
    //       mobile : preValue.mobile
    //     };
    //   }else if(name === 'lname'){
    //     return{
    //       fname : preValue.fname,
    //       lname : value,
    //       email : preValue.email,
    //       mobile : preValue.mobile
    //     };
    //   }else if(name === 'email'){
    //     return{
    //       fname : preValue.fname,
    //       lname : preValue.lname,
    //       email : value,
    //       mobile : preValue.mobile
    //     };
    //   }else if(name === 'mobile'){
    //     return{
    //       fname : preValue.fname,
    //       lname : preValue.lname,
    //       email : preValue.email,
    //       mobile : value
    //     };
    //   }
    // });

  // };
  const submit = (event) => {
      // event.preventDefault();
      alert('Form Submitted Successfully');
  };

  return (
    <>
      <div className='main'>
        <form onSubmit={submit}>
          <div className='textarea'>
              Hello {Deatails.fname} {Deatails.lname}<br/>
              {Deatails.email}<br/>
              {Deatails.mobile}
          </div><br/>
          <input type='text' 
          placeholder='firstName' 
          onChange={inputEvent} 
          name = 'fname'
          value = {Deatails.fname}
          required
          className='input'/>
          <br/><br/>
          <input type='text' 
          placeholder='LastName' 
          onChange={inputEvent} 
          name = 'lname'
          value = {Deatails.lname}
          required
          className='input'/>
          <br/><br/>
          <input type='email' 
          placeholder='Email' 
          onChange={inputEvent} 
          name = 'email'
          value = {Deatails.email}
          required
          className='input'/>
          <br/><br/>
          <input type='number' 
          placeholder='Mobile' 
          onChange={inputEvent} 
          name = 'mobile'
          value = {Deatails.mobile}
          required
          className='input'/>
          <br/><br/>
          <button  type='submit' className='btn'>Submit</button>
        </form>  
      </div>
    </>
  );
}

export default App;
