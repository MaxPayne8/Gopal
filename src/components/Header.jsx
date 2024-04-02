import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate("for_login_page");
  };
  const handleAction1 = () => {
    navigate("for_home_page");
  };
  return (
    <div className='flex justify-between items-center p-2 border-b'>
      <div className='ml-2 mt-1 font-extrabold hover:cursor-pointer' onClick={handleAction1}>Supreme Tech Work Pvt Limited</div>
      <button className='bg-gray-200 px-2 py-1 rounded-lg border-black border-2 hover:bg-green-300' type='button' onClick={handleAction}>Sign In</button>
    </div>
  )
}

export default Header