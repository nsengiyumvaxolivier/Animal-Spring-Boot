import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;



function Hone() {
    const [animals,setAnimals]=useState([]);
    useEffect(()=>{
        axios.get(`${API}/`)
        .then(res=>{
            setAnimals(res.data);
        })
    },[])
  return (
    <>
    <div className="conatiner-fluid h-screen w-full bg-blue-800 justify-center flex ">
        <div className="conatiner bg-white p-2 rounded w-1/2 m-auto">
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
                                <td> <Link to={"/view/"+a.id} className='bg-blue-700 text-sm p-1 font-bold rounded text-white'> View</Link></td>
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
