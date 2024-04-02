import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

const HomePageBanner3 = () => {
  return (
    <div className='p-1 md:p-5 flex flex-col gap-3   md:flex-row justify-between items-center mt-5'>
        <div className='w-[50%]'>
        <h1 className='text-bold text-blue-500 mb-4'>AUTHENTIC PLATFORM</h1>
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl rounded-lg'/><h6>24/7 support</h6> </div>
        
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl rounded-lg'/><h6>Mobile supported</h6> </div>
        
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl rounded-lg'/><h6>Get daily task online</h6> </div>
        
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl rounded-lg'/><h6>Work from home jobs</h6> </div>
        
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl rounded-lg'/><h6>Flexible working hours</h6> </div>
        
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl rounded-lg'/><h6>Earn Rs.25 Per page</h6> </div>
        
        <div className='flex gap-2 items-center my-2'><FaCheckSquare className='text-green-600 text-2xl'/><h6>Weekly payment</h6> </div>
        
        
        </div>
        <div>
            <img src="https://picsum.photos/id/1/500/300" className='rounded-lg w-72 h-56 md:w-[480px] md:h-72'></img>
        </div>
        
    </div>
  )
}

export default HomePageBanner3