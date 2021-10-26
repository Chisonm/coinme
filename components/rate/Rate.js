import React from 'react'
import RateStyles from '../../styles/Rate.module.css'
import Image from 'next/image'

import bitcoin from '../../public/bitcoin.png'
import etherum from '../../public/etherum.png'
import xrp from '../../public/xrp.png'
import nulls from '../../public/nulls.png'

const Rate = () => {
    return (
        <div className={RateStyles.container}>
            <div className={RateStyles.header_content}>
                <h3 className={RateStyles.header_h3}>{'Today\'s Rate'}</h3>
                <hr className={RateStyles.border_bottom}></hr>
            </div>
            <div className={RateStyles.d_grid}>
                <div className={RateStyles.rate_card}>
                    <div className={RateStyles.image_container}>
                        <Image src={bitcoin} className={RateStyles.image_center} width={50} height={50} layout="fixed" alt="bitcoin" />
                    </div>
                    <span>BTC/BUSD</span>
                    <p>$45,243.56</p>
                </div>
                <div className={RateStyles.rate_card}>
                    <div className={RateStyles.image_container}>
                        <Image src={etherum} width={50} height={50} layout="fixed" alt="etherum" />
                    </div>
                    <span>ETH/BUSD</span>
                    <p>$12,243.56</p>
                </div>
                <div className={RateStyles.rate_card}>
                    <div className={RateStyles.image_container}>
                        <Image src={xrp} width={50} height={50} layout="fixed" alt="ripple" />
                    </div>
                    <span>XRP/BUSD</span>
                    <p>$25,243.56</p>
                </div>
                <div className={RateStyles.rate_card}>
                    <div className={RateStyles.image_container}>
                        <Image src={nulls} width={50} height={50} layout="fixed" alt="nulls" />
                    </div>
                    <span>NULLS/BUSD</span>
                    <p>$12,243.56</p>
                </div>
            </div>
        </div>
    )
}

export default Rate
