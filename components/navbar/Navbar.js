import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import NavbarStyles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={NavbarStyles.navbar}>
            <div className={NavbarStyles.container}>
                <nav className={NavbarStyles.d_flex}>
                    <Link href="/">
                        <Image className={NavbarStyles.logo}  src={logo} alt="logo" />
                    </Link>
                    <ul className={isOpen === false ? NavbarStyles.nav_item : NavbarStyles.nav_item + ' ' + NavbarStyles.active } onClick={handleClick}>
                        <li className={NavbarStyles.nav_link_item}><Link className={NavbarStyles.nav_link_item} href="/">Prices</Link></li>
                        <li className={NavbarStyles.nav_link_item}><Link className={NavbarStyles.nav_link_item} href="/">Learn</Link></li>
                        <li className={NavbarStyles.nav_link_item}><Link className={NavbarStyles.nav_link_item} href="/">Developers</Link></li>
                        <li className={NavbarStyles.nav_link_item}><Link className={NavbarStyles.nav_link_item} href="/">Business</Link></li>
                        <li className={NavbarStyles.nav_link_item}><Link className={NavbarStyles.nav_link_item} href="/">Company</Link></li>
                        <li className={NavbarStyles.nav_link_item, NavbarStyles.download_btn}><Link className={NavbarStyles.nav_link_item} href="/">Download App</Link></li>
                    </ul>

                    <div className={isOpen === false ? NavbarStyles.menu : NavbarStyles.menu + ' ' + NavbarStyles.active} onClick={handleClick}>
                        <span className={NavbarStyles.bar}></span>
                        <span className={NavbarStyles.bar}></span>
                        <span className={NavbarStyles.bar}></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
