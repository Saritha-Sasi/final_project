import React from 'react'
import Header from '../components/common/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import Footer from '../components/common/footer/Footer'

const AppRouter = () => {
  return (
    <Router>
    <Header/>
  <Routes>
      <Route path="/" element={<Home />} />
  </Routes>
  <Footer />
</Router>
  )
}

export default AppRouter