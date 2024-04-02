import React from 'react';
import { FaUserCircle, FaStar } from "react-icons/fa";

const ReviewCard = ({ name, review, stars, isNew=false }) => {
    console.log(isNew);
  return (
    <div className='w-96 p-5 px-10 h-56 shadow-lg flex flex-col justify-center items-center my-3 rounded-xl relative'>
      {isNew && <h6 className='text-white bg-red-500 absolute top-2 left-2 p-1 rounded-xl'>New</h6>}
      <FaUserCircle className='text-orange-600 text-3xl' /> 
      <h3>{name}</h3> 
      <div className='flex'>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < stars ? 'text-yellow-400 gap-2' : 'text-gray-300 gap-2'}
          />
        ))}
      </div>
      <h6>{review}</h6>
    </div>
  );
}

export default ReviewCard;
