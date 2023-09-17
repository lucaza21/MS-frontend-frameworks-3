import React from 'react'
import { Button } from 'flowbite-react';

export default function Profile({onLoginComplete}) {

  return (
    <>
    <div className='flex flex-col items-center justify-between w-2/4 mx-auto my-3 text-center xl:w-1/4 '>
        <div className=''>
            <img src='/person.jpg' className='w-40 h-40 rounded-full shadow-lg' alt="profile"  />
        </div>
        <div>
            <h1 className='text-lg font-semibold'>@Luis</h1>
        </div>
        <div className='p-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <Button type="submit" onClick={() => onLoginComplete(true)}>Logout</Button>

    </div>
    </>
  )
}
