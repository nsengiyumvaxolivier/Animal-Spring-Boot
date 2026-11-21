import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const API =import.meta.env.VITE_API_URL;



function Edit() {
    const location = useNavigate();

    const [animal,setAnimal]=useState([]);
    const {id}=useParams();
     
    useEffect(()=>{
        axios.get(`${API}/animal/${id}`)
        .then(res=>{
            setAnimal(res.data);
            console.log(res.data);
        })

    },[])

    const saveAnimal =(id)=>{
        axios.put(`${API}/animal/${id}`,animal)
        .then(res=>{
            alert(res.data);
            location("/");
        })
    }

  return (
    <>
      
    <div className="container-fluid bg-blue-800 flex justify-center h-screen w-full p-2">
<div className="conatiner bg-white p-2 rounded w-full md:w-1/4 m-auto">
<div className="flex p-1 justify-between"><h1 className='p-1 font-bold text-sm'>Edit Animal</h1>
 <Link to="/" className='bg-gray-500 text-sm p-1 font-bold rounded text-white'> Back</Link>
</div>

<hr className='p-1' />

<div className="form">
    <label htmlFor="" className='block text-sm font-bold py-1'>Animal Name</label>
    <input type="text" onChange={(e)=>setAnimal({...animal,name:e.target.value})} name="" value={animal.name} id="" className='border rounded p-1 text-sm w-full border-gray-300 outline-0 focus:outline-1 outline-blue-500' />
 <label htmlFor="" className='block text-sm font-bold py-1'>Animal Name</label>
    <input type="text" onChange={(e)=>setAnimal({...animal,type:e.target.value})} name="" value={animal.type} id="" className='border rounded p-1 text-sm w-full border-gray-300 outline-0 focus:outline-1 outline-blue-500' />
<div className="flex p-1 my-2 justify-end">
 <button onClick={()=>saveAnimal(animal.id)} className='bg-blue-500 text-sm p-1 font-bold rounded text-white'> Save Changes</button>
</div>
</div>
</div>
    </div>
    
    </>
  )
}

export default Edit
