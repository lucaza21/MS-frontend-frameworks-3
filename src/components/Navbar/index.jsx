import React from 'react'
import { AiFillThunderbolt  } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar({showpProfile, showpPosts}) {
  return (
    <>
    <div className='container flex items-center justify-center w-4/5 py-3 mx-auto bg-slate-300 '>
        <nav className='flex justify-between w-5/6 gap-4 lg:w-/4'>
            <button onClick={showpPosts} className='flex items-center justify-start w-1/2 gap-2' >
                <div className='text-lg'>
                    <AiFillThunderbolt />
                </div>
                <div className='text-lg '>
                    <p>three pics</p>
                </div>
            </button>
            <button onClick={showpProfile} className='text-2xl '>
                <FaUserCircle /> 
            </button>
        </nav>
    </div>
    </>
  )
}
