import React from 'react'

// Imported Components
import About from '../components/About'
import Navbar  from '../components/Navbar'
import Footer from '../components/Footer'

function LandingPage({isActive, setIsActive}) {
    return (
        <>
            <Navbar
            isActive={isActive}
            setIsActive={setIsActive} />
            <About />
            <Footer />
        </>
    )
}

export default LandingPage
