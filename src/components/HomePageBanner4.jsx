import React from 'react'
import ReviewCard from './ReviewCard'
import { FaPlus, FaStar } from "react-icons/fa";

const HomePageBanner4 = () => {
    const data=[{"name":"Ishaan Sharma" ,"review":"Outstanding service! I just fill form and i got my payment. I am very happy with this service.","stars":5 },
    {"name":"Arjun Kumar" ,"review":"Just Easy Data Entry Work. I cheat in filling form and got ban but help me to unban my account. I got my payment on time.","stars":5  },
    {"name":"Priya Joshi" ,"review":"Good experience overall. I got my payment on time. But i got ban 3 times because of my mistake. But they help me to unban my account.","stars":4 },
    {"name":"Riya Singh" ,"review":"Best website for online work. I am very happy with this service. I got my payment on time.","stars":4 },
    {"name":"Neha Gupta" ,"review":"Excellent service! I Love it. Easy Data Entry Work. I got my payment on time.","stars":5 },
    {"name":"Kabir Verma" ,"review":"Positive experience overall. Recommend it to fellow freelancers.","stars":4 },
    {"name":"Aarav Kapoor" ,"review":"I fill some blank form and i thought i loss my money but thanks to support team they help me and i got my payment after re-active my account. really good service.","stars":3, "isNew":true },
    {"name":"Anaya Patel" ,"review":"Good overall experience. User-friendly interface and good support from support team. easy guidelines and easy work.","stars":5, "isNew":true },
   ,]

  return (
    <div className='flex justify-evenly flex-wrap p-10'>
        {data.map(card => <ReviewCard name={card.name} review={card.review} stars={card.stars} isNew={card.isNew} />)}
        <div className='w-96 p-5 px-10 h-56 shadow-lg flex flex-col justify-center items-center my-3 rounded-xl relative '>
    
      <FaPlus  className='text-green-600 text-5xl hover:cursor-pointer' />
      <h3>Add Your Own Review</h3>
      <div className='flex '>
        <FaStar className='text-gray-300 gap-2' /> 
       <FaStar className='text-gray-300 gap-2' /> 
        <FaStar className='text-gray-300 gap-2' /> 
        <FaStar className='text-gray-300 gap-2' /> 
         <FaStar className='text-gray-300 gap-2' /> 
      </div>
      <h6 className='my-4'>Tap the plus icon to add your own review and rating in the form of an email.</h6>
      
    </div>
    </div>
  )
}

export default HomePageBanner4