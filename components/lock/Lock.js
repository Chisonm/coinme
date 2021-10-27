import React from 'react'
import LockStyles from '../../styles/Lock.module.css'
import Image from 'next/image'
import Link from 'next/link'

import lock from '../../public/lock.png'
import playstore from '../../public/Googleplay.png'
import apple from '../../public/Appstore.png'

const Lock = () => {
    return (
        <div className={LockStyles.container}>
            <div className={LockStyles.lock_content}>
                <div className={LockStyles.image_container}>
                    <Image src={lock} alt="lock-icon" width={100} height={100} />
                </div>
                <p>Join over six million customers and experience a new kind of financial freedom</p>
                <div className={LockStyles.d_flex}>
                    <div className={LockStyles.flex_items}>
                        <Link href="/">
                            <Image src={playstore} alt="playstore" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image src={apple} alt="apple" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lock
