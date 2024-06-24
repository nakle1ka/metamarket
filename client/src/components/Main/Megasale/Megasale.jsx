import React from 'react'
import styles from './Megasale.module.css'
export default function Megasale() {
    return (
        <div className='saleContainer'>
            <div className='megasale'>
                <h1>
                    ЕЖЕНЕДЕЛЬНАЯ
                    РАСПРОДАЖА
                </h1>
            </div>
            <div className="today">
                <h2>Товар дня</h2>
            </div>
        </div>
    )
}
