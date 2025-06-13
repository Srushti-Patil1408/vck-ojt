import '../Header/Header.css'

import React, { useState } from "react"
import { Link } from 'react-router-dom'








const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        
        
        <nav className="navbar">
            <div className="nav1"><b>Vivekanand College</b></div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
            <div className={` nav-links ${menuOpen ? 'active' : ''}`}>
            
            
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>

               <a href="/Admissions"><button className="b2">Apply Now!</button></a>
               </div>
                

                
            </nav>
        
    )
}

export default Header