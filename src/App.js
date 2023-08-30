import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';
import { useState } from 'react';
function App() {
  let [theme, setTheme] = useState({ bgcolor: "white", textcolor: "black", toggle: "Light", link: "black" })
  const changeColor = () => {
    if (theme.bgcolor === "white") {
      setTheme(
        {
          bgcolor: "black", textcolor: "purple", toggle: "Dark", link: "purple"
        }
      )
    } else {
      setTheme(
        {
          bgcolor: "white", textcolor: "black", toggle: "Light", link: "black"
        }
      )
    }
  }

  return (
    <div className="App" style={{ backgroundColor: theme.bgcolor, color: theme.textcolor }}>

      <p>I have changed theme to {theme.toggle}</p>
      <p>Geekster</p>

      <div style={{ display: "flex", flexDirection: "column" }}>

        <Link to="/Home" style={{ color: theme.link }}>Home</Link>
        <Link to="/Contact" style={{ color: theme.link }}>Contact</Link>
        <Link to="/Service" style={{ color: theme.link }}>Service</Link>

      </div>
      <div>
        <button style={{ margin: "20px 0px 20px 0px", widt: "30px" }} onClick={changeColor}>Toggle Theme To {theme.toggle}</button>
      </div>

      <div >

        <Routes>
        <Route path='/' element={<Home />}  />
          <Route path='/Home' element={<Home />}  />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Service' element={<Service />} />
        </Routes>
      </div>



    </div>
  );
}

export default App;
