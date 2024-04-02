import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-gray-100 pt-4'>
        <h2 className='font-bold text-center'>Supreme Tech Work Pvt Ltd</h2>
        <div className='flex gap-1 items-center ml-10 mt-3'>
            <FaLocationArrow className='text-xl'/>
            <a href="https://www.google.com/maps?q=Rama Enclave, B.S Maqta, Nishat Bagh Colony, Begumpet, Hyderabad, Telangana 500082" target="_blank" rel="noopener noreferrer" className='no-underline'>
                <h6 className='text-gray-500'>6-3-1132/1/2 bs maqta opp rama enclave, Sanath Nagar, Hyderabad, Telangana 500018</h6>
            </a>
        </div>
        <div className='flex gap-1 items-center ml-10 mt-1'>
            <IoMdMail className='text-xl'/>
            {/* <a  href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AYZoVhcSpnx_YjPFoLvSJdolmSi9y4EIAAYeRM6wmGzFtZgpALWn1huHkj9JdxmmaVX1Fv9yUUPi5g&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S134951283%3A1695446818780277&theme=glif"
                target="_blank"> */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=help@supremetechworkpvt.ltd" target="_blank" rel="noopener noreferrer" className='no-underline'>
                <h6 className='text-black text-center'>help@supremetechworkpvt.ltd</h6>
            </a>
        </div> 
        <div className='w-full h-[1px] bg-gray-300'></div>
        <h5 className='text-center text-gray-500'>© {new Date().getFullYear()} Supreme Tech Work Pvt Ltd. All rights reserved</h5>
    </div>
  )
}

export default Footer
