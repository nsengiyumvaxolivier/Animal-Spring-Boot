import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;



function Hone() {
    const location=useNavigate();
    const [animals,setAnimals]=useState([]);
    useEffect(()=>{
        axios.get(`${API}/`)
        .then(res=>{
            setAnimals(res.data);
        })
    },[])

    const API=import.meta.env.VITE_API_URL;

    const deleteAnimal =(id)=>{
        const yesDelete = confirm("Delete Animal");
        if (yesDelete) {
            axios.delete(`${API}/animal/${id}`)
            .then(res=>{
                alert(res.data);
                setAnimals(animals.filter(a=> a.id != id));
            })
            return 0;
        }
        else{
            location("/");
            return 0;
        }
    }
  return (
    <>
    <div className="conatiner-fluid h-screen w-full bg-blue-800  p-2 py-4">
        <div className="conatiner bg-white p-2 rounded w-full md:w-1/2 m-auto">
        <div className="flex p-2 justify-between"><h1 className='p-1 font-bold text-sm'>Animal List</h1>
        <Link to="/Add-Animal" className='bg-blue-500 text-sm p-1 font-bold rounded text-white'> Add Animal</Link> </div>
        <hr  className='p-1'/>
        <div className="table-responsive">
            <table className='w-full'>
                <thead>
                    <tr className='[&_th]:text-left [&_th]:bg-gray-200 [&_th]:p-1'>
                        <th>#</th><th>Name</th><th>Type</th> <th>More</th></tr>
                </thead>
                <tbody>
                    {
                        animals.map((a,index)=>(
                            <tr key={a.id} className='border border-gray-200 [&_td]:p-2 [&_td]:text-sm'>
                                <td>{index+1}</td>
                                <td>{a.name}</td>
                                <td>{a.type}</td>
                                <td className='flex w-full justify-end'> 
                                    <Link to={"/Edit/"+a.id} className='bg-blue-700 text-sm p-1 font-bold rounded text-white mx-2'> Edit</Link>
                                    <button className='bg-red-700 text-sm p-1 font-bold rounded text-white cursor-pointer' onClick={()=>deleteAnimal(a.id)}> Delete</button>
                                    </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
      
        </div>
    </div>
    </>
  )
}

export default Hone
