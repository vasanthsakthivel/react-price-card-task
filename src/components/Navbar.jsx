import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/all">All</Link></li>
                <li><Link to="/fullstack">FUll Stack Development</Link></li>
                <li><Link to="/datascience">Data Science</Link></li>
                <li><Link to="/cybersecurity">Cyber Security</Link></li>
                <li><Link to="/career">Career</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
