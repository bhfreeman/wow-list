import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex justify-end h-16 items-center">
            <Link to='/' className="absolute left-0 font-mono font-bold text-5xl">Wow List</Link>
            <Link to='/about' className="p-1">About</Link>
            <Link to='/login' className="p-1">Login</Link>
            <Link to='/logout'className="p-1">Logout</Link>
        </nav>
    )
}

export default Navbar
