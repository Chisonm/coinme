import React from 'react'
import Image from 'next/image'
import hero from '../../public/coin.png'
import HeroStyles from '../../styles/Hero.module.css'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={HeroStyles.container}>
           <div className={HeroStyles.d_flex}>
           <div className={HeroStyles.hero_content}>
                <h2 className={HeroStyles.hero_header}>Trade crypto seamlessly and anywhere</h2>
                <p className={HeroStyles.hero_lead}>Coinmeis the easiest place to buy and sell cryptocurrencies.
                    Sign up and get started today.
                </p>
                <Link className={HeroStyles.sign_ip_btn} href="/">Sign up for free</Link>
            </div>
            <div className={HeroStyles.image_right}>
                <Image  src={hero} />
            </div>
           </div>
        </div>
    )
}

export default Hero
