import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Hero = () => {
    return (
        <div style={{ color: 'white'}}>
            <h1 style={{ color: 'white'}}>hello</h1>
            <h1 style={{ color: 'white'}}>hello</h1>
            <h1 style={{ color: 'white'}}>hello</h1>
            <h1 style={{ color: 'white'}}>hello</h1>
            <h1 style={{ color: 'white'}}>hello</h1>
            <h1 style={{ color: 'white'}}>hello</h1>
            <Image className={NavbarStyles.logo}  src={logo} alt="logo" />

        </div>
    )
}

export default Hero
