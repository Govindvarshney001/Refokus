import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';



function App() {
  return (
    <div className="w-full h-full bg-[#161618] font-sans ">
      <Navbar />
      <Work></Work>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App
