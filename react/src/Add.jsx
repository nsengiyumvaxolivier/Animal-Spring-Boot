import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Add() {
    const [animal,setAnimaml]=useState({
        name:"",
        type:""
    })
    const saveAnimal =()=>{
        axios.post("http://localhost:8080/add-animal",animal)
        .then(res=>{
            alert(res.data);
        })
    }
  return (
    <>
    <div className="container-fluid bg-blue-800 flex justify-center h-screen w-full">
<div className="conatiner bg-white p-2 rounded w-1/4 m-auto">
<div className="flex p-1 justify-between"><h1 className='p-1 font-bold text-sm'>Add Animal</h1>
 <Link to="/" className='bg-gray-500 text-sm p-1 font-bold rounded text-white'> Back</Link>
</div>

<hr className='p-1' />

<div className="form">
    <label htmlFor="" className='block text-sm font-bold py-1'>Animal Name</label>
    <input type="text" onChange={(e)=>setAnimaml({...animal,name:e.target.value})} name="" id="" className='border rounded p-1 text-sm w-full border-gray-300 outline-0 focus:outline-1 outline-blue-500' />
 <label htmlFor="" className='block text-sm font-bold py-1'>Animal Name</label>
    <input type="text" onChange={(e)=>setAnimaml({...animal,type:e.target.value})} name="" id="" className='border rounded p-1 text-sm w-full border-gray-300 outline-0 focus:outline-1 outline-blue-500' />
<div className="flex p-1 my-2 justify-end">
 <button onClick={()=>saveAnimal()} className='bg-blue-500 text-sm p-1 font-bold rounded text-white'> Save</button>
</div>
</div>
</div>
    </div>
    </>
  )
}

export default Add
