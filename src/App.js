import React from 'react'
import Navbar from './components/Navbar'
import ImgSlider from './components/ImgSlider'
import Products from './components/Products'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <ImgSlider />
      <Products />
      <Footer />
    </div>
  )
}

export default App