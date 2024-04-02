import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import Header from './components/Header';
import Footer from './components/Footer';
  



const App = () => {
  return (
    <div>
     <Header/>
     <SignIn/>
     <Footer/>
    </div> 

  )
}

export default App