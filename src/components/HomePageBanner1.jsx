import React from 'react'

const HomePageBanner1 = () => {
  return (
    <div className='p-1 flex flex-col gap-3   md:flex-row justify-between items-center md:p-5 '>
        <div className='w-[50%]'>
        <h1 className='text-bold text-blue-500'>Welcome To  </h1>
        <h1 className='text-bold text-blue-800'>Supreme Tech Work</h1>
        <h1 className='text-bold text-blue-500'>Pvt Ltd</h1>
        <h6 className='mt-4'>Welcome to our dedicated Project Board, an exclusive platform tailored for contract work. It stands as the ultimate hub, catering to freelancers, agencies, and moonlighters alike. This specialized space offers a plethora of opportunities and advantages for those seeking flexible project-based engagements. For freelancers, our Project Board unfolds a vast landscape of potential projects spanning diverse industries and niches. Whether your expertise lies in creative design or technical development, this platform allows you to explore a wide array of tasks aligned with your skills and interests. Moreover, our platform serves as a showcase for your talents, enabling you to build a reputable portfolio and connect with potential clients actively seeking your specific skills. Embrace the exclusivity of our platform and dive into a world of unparalleled opportunities and connections.        </h6>
        </div>
        <div>
            <img src="https://picsum.photos/id/1/500/300" className='rounded-lg w-72 h-56 md:w-[480px] md:h-72'></img>
        </div>
        
    </div>
  )
}

export default HomePageBanner1