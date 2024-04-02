import React from 'react'
import Header from '../components/Header'
import HomePageBanner1 from '../components/HomePageBanner1'
import HomePageBanner2 from '../components/HomePageBanner2'
import HomePageBanner3 from '../components/HomePageBanner3'
import HomePageBanner4 from '../components/HomePageBanner4'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HomePageBanner1/>
        <HomePageBanner2/>
        <HomePageBanner3/>
        <HomePageBanner4/>
        <Footer/>
    </div>
  )
}

export default HomePage