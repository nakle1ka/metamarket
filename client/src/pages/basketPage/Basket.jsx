import { useEffect, useState } from 'react'
import BasketElements from '../../components/BasketComponents/BasketElements/BasketElemnts'
import ResultPrice from '../../components/BasketComponents/ResultPrice/ResultPrice'
import Order from '../../components/ProfileComponents/MyOrders/Order/order'
import CheckBox from '../../widgets/CheckBox/CheckBox'
import Counter from '../../widgets/counter/counter'

import classes from './Basket.module.css'
import DeleteButton from '../../widgets/DeleteButton/DeleteButton'
import NoOrders from '../../components/ProfileComponents/NoOrders/NoOrders'

export default function Basket() {
	const [orders, setOrders] = useState([
		{ OrderName: 'call of duty', OrderPrice: 10000, id: 123, quantity: 0 },
		{ OrderName: 'cal of dty', OrderPrice: 10000, id: 678, quantity: 0 },
		{ OrderName: 'call of duty', OrderPrice: 50000, id: 6783, quantity: 0 },
		{ OrderName: 'cal of duty', OrderPrice: 1570, id: 890, quantity: 0 },
		{ OrderName: 'call of duty', OrderPrice: 1500, id: 8790, quantity: 0 },
		{ OrderName: 'callf duty', OrderPrice: 1000, id: 8980, quantity: 0 },
		{ OrderName: 'call f duty', OrderPrice: 15000, id: 8970, quantity: 0 },
		{ OrderName: 'cal of duy', OrderPrice: 15000, id: 897400, quantity: 0 },
		{ OrderName: 'call of duty', OrderPrice: 10000, id: 89340, quantity: 0 },
	])

	const [resultPrice, setResultPrice] = useState({ all: 0, price: 0 })
	const [checkedOrders, setCheckedOrders] = useState([])

	useEffect(() => {
		setResultPrice({
			all: orders.length,
			price: checkedOrders.reduce((acc, item) => {
				return acc + item.OrderPrice * item.quantity
			}, 0),
			select: checkedOrders.length,
		})
	}, [checkedOrders,orders])

	function DeleteOrder(id){
		setOrders(prev=>{
			return [...prev].filter(order=>order.id !== id)
		})
		setCheckedOrders(prev=>{
			return [...prev].filter(order => order.id !== id)
		})
		
	}		
	function onCheckboxChange(e, id) {
		orders.map(order => {
			if (order.id === id) {
				setCheckedOrders(prev => {
					if (e.target.checked) {
						return [...prev, order]
					} else {
						return [...prev].filter(order => order.id !== id)
					}
				})
			}
		})
	}

	function onClickButtonOne(id) {
		setOrders(prev => {
			return [...prev].map(order => {
				if (order.id === id) {
					const new_order = { ...order, quantity: order.quantity + 1 }
					if (checkedOrders.includes(order)) {
						setCheckedOrders(prev => {
							return prev.map(item => {
								if (item.id === id) {
									return new_order
								}
								return item
							})
						})
					}
					return new_order
				}
				return order
			})
		})
	}
	function onClickButtonTwo(id) {
		setOrders(prev => {
			return [...prev].map(order => {
				if (order.id === id && order.quantity - 1 >= 0) {
					const new_order = { ...order, quantity: order.quantity - 1 }
					if (checkedOrders.includes(order)) {
						setCheckedOrders(prev => {
							return prev.map(item => {
								if (item.id === id) {
									return new_order
								}
								return item
							})
						})
					}
					return new_order
				}
				return order
			})
		})
	}

	return (
		<section className={classes.BasketSection}>
			<BasketElements logotype='корзина'>
				{orders.length === 0 ? <NoOrders/> : null }
				{orders.map(order => {
					return (
						<Order
						style={{width:'100%',justifyContent:'space-between'}}
						deleteForBasket={<DeleteButton onClick={()=>DeleteOrder(order.id)}/>}
							key={order.id}
							counterForBasket={
								<Counter
									counter={order.quantity}
									onClickButtonOne={() => onClickButtonOne(order.id)}
									onClickButtonTwo={() => onClickButtonTwo(order.id)}
								/>
							}
							OrderName={order.OrderName}
							OrderPrice={order.OrderPrice}
							checkedForBasket={
								<CheckBox
									inputId={order.id}
									onChange={e => onCheckboxChange(e, order.id)}
								/>
							}
						/>
					)
				})}
				
			</BasketElements>
			<ResultPrice
				logotype='Итого'
				all={resultPrice.all}
				select={resultPrice.select}
				price={resultPrice.price}
			/>
		</section>
	)
}
