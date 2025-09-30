
import React, { useState } from 'react' 
import axios from 'axios'
const Signup = () => {
  let [formData,SetFormData]=useState({
    name:"",
    email:"",
    passWord:""
  })          
  function handleForm(e){
    let {name,value}=e.target
    SetFormData({
      ...formData,[name]:value
    })
  }

    async  function handleSubmit(e){
    e.preventDefault()

        let res=   await axios.post("http://localhost:4000/create",formData)
        console.log(res.data);
        localStorage.setItem("user",JSON.stringify(res.data))
        

      
    // console.log(formData);
     
    //  let data=     await fetch("http://localhost:4000/create" ,{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(formData)
    // })
    // let res=    await data.json()
    // console.log(res);
  
    // console.log("heheh");

        
    


    
  }

  // {
  //   name:"rimi",
  //   passWord:"123"    
  // }
  // {
  //   "name":"123",
  //   "dsifwi":2423
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  name='name' value={formData.name}  onChange={handleForm} type='text' placeholder='Name'/>
        <br></br>
        <br></br>
        <input  name='email' value={formData.email}  onChange={handleForm} type='email' placeholder='Name'/>
        <br></br>
        <br></br>
        <input   name='passWord' value={formData.passWord}  onChange={handleForm} type='password' placeholder='password'/>
        <br></br>
        <br></br>
        <button type='submit'> AddData</button>

      </form>
    </div>
  )
}

export default Signup
