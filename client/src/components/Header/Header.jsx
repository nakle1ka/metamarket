import React from 'react'
import Logo from '../../widgets/Logo/Logo';
import Burger from '../../widgets/Burger/Burger';
import styles from './Header.module.css'
import { IoIosSearch } from "react-icons/io";
import Utilities from './Utilities';
export default function Header({ isProfile }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Logo />
                <Burger />
                {!isProfile && (
                    <div className={styles.searchInput}>
                        <input className={styles.input} type="text" placeholder='Напиши что-нибудь...' />
                        <button className={styles.Btn}>
                            <IoIosSearch size={35} color='white' />
                        </button>
                    </div>
                )}
                <Utilities />
            </div>
        </div>
    )
}
