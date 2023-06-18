import React from 'react'
import logo from '../src/logo.svg'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import './App.css'

import Box from './Components/Box'
function App() {
  return (
   <div className="container_">
<Navbar image = {logo} />
<div className="main_image">
</div>
<div className="main_heading">
<h1>The Bright Future of Web 3.0?</h1>
</div>
<div className="main_para">
<p>
We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
</p>
<button>READ MORE</button>
</div>
<div className="box">
    <Box />
</div>

<Card />
</div>
  );
}

export default App

