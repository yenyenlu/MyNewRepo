<<<<<<< HEAD
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="logo" title="Yan Lu"><span style={{fontWeight:800}}>YL</span></div>
=======

import { NavLink } from 'react-router-dom'
export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="logo" title="Yan Lu">YL</div>
>>>>>>> d377e5a6218764aae94e18afed64d6f1b6e65417
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> d377e5a6218764aae94e18afed64d6f1b6e65417
