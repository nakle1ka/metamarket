import React from 'react'
import Logo from '../../../widgets/Logo/Logo';
import Burger from '../../../widgets/Burger/Burger';
import styles from './Header.module.css'
import Search from './../../../shared/img/search.png'
import Utilities from './Utilities';
export default function Header({ isProfile }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Logo />
                {!isProfile && (
                    <>
                        <Burger />
                        <div className={styles.searchInput}>
                            <input className={styles.input} type="text" placeholder='Напиши что-нибудь...' />
                            <button className={styles.Btn}>
                                <img src={Search} alt="" />
                            </button>
                        </div>
                    </>
                )}
                <Utilities />
            </div>
        </div>
    )
}
