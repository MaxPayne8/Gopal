import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";

const HomePageBanner2 = () => {
    const [num, setNum] = useState(100);
    useEffect(() => {
        const intervalId = setTimeout(() => {
          setNum(prevNum => prevNum + 1);
        }, 600); // Run every 1000 milliseconds (1 second)
      
        return () => clearInterval(intervalId); // Cleanup function to clear the timeout
      }, [num]); 
    
  return (
    <div className='p-1 md:p-5 flex flex-col gap-3   md:flex-row justify-between items-center mt-5'>
        <div className='w-[50%]'>
        <h1 className='text-bold text-blue-500'>OUR STORY AND MISSION  </h1>
        <h1 className='text-bold text-blue-500'>WITH  YOU</h1>
        <h6 className='mt-4'>Explore exciting job opportunities with our company, where you can choose between part-time and full-time positions without any registration fees. We believe in fulfilling our social responsibilities towards our country. Our work is both fulfilling and flexible. You'll have a total of 6 calendar days to complete 700 forms. Even if you make mistakes in up to 70 forms, it's not a problem. We require a minimum accuracy of 90%, but it's essential that you complete all 700 forms. Join us and be a part of our mission to make work accessible and rewarding for everyone.    </h6>
        <div className='flex gap-2 items-center my-3 border-b py-2'>
        <FaUserCircle className='text-3xl text-blue-500' />
            <h5>{num}+ Happy Clients  </h5>
        </div>  
        <div className='flex gap-2 items-center my-3  py-2'>
        <FaConnectdevelop className='text-3xl text-blue-500' />
            <h5>250+ Project Completed  </h5>
        </div>
        <div className='flex gap-2 items-center my-3 border-b py-2'>
        <FaRunning  className='text-3xl text-violet-500' />
            <h5>70+ Running   </h5>
        </div>

        
        
        </div>

        <div>
            <img src="https://picsum.photos/id/1/500/300" className='rounded-lg w-72 h-56 md:w-[480px] md:h-72'></img>
        </div>
        
    </div>
  )
}

export default HomePageBanner2