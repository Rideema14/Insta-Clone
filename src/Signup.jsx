
import React, { useState } from 'react' 
import axios from 'axios';
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

  return (
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form 
    onSubmit={handleSubmit} 
    className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
  >
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
      Sign Up
    </h2>

    <input 
      name="name" 
      value={formData.name}  
      onChange={handleForm} 
      type="text" 
      placeholder="Name"
      className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input  
      name="email" 
      value={formData.email}  
      onChange={handleForm} 
      type="email" 
      placeholder="Email"
      className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input   
      name="passWord" 
      value={formData.passWord}  
      onChange={handleForm} 
      type="password" 
      placeholder="Password"
      className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button 
      type="submit" 
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Add Data
    </button>
  </form>
</div>

  )
}

export default Signup
