import MyOrders from '../../components/ProfileComponents/MyOrders/MyOrders'
import Order from '../../components/ProfileComponents/MyOrders/Order/order'
import NoOrders from '../../components/ProfileComponents/NoOrders/NoOrders'
import UserStats from '../../components/ProfileComponents/UserStats/UserStats'
import UserInfo from '../../components/ProfileComponents/userInfo/UserInfo'
import classes from './Profile.module.css'
import { useState } from 'react'



	function sortByPrice(prev) {
		if (prev) {
			return [...prev].sort((a, b) => {
				return a.OrderPrice - b.OrderPrice
			})
		}
	}

	function sortByName(prev) {
		if (prev) {
			return [...prev].sort((a, b) => {
				if (a.OrderName > b.OrderName) {
					return 1
				} else if (a.OrderName === b.OrderName) {
					return 0
				}
				return -1
			})
		}
	}


export {sortByName,sortByPrice}


export default function Profile({ changeIsProfileTrue }) {
	changeIsProfileTrue()
	

	const [orders, setOrders] = useState([
		{
			OrderName: 'в',
			OrderPrice: 50000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'а',
			OrderPrice: 10000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'в',
			OrderPrice: 5000,
			OrderStatus: 'куплен',
		},
	])


	function sortOrders(e) {
		if (e.target.value === 'Сортировать по цене') {
			setOrders(prev => {
				
				return sortByPrice(prev)
			})
		} else if (e.target.value === 'Сортировать по имени') {
			
			setOrders(prev => sortByName(prev))
		} else {
			return null
		}
	}
	
	return (
		<>
			<div className={classes.ProfileContainer}>
				<UserInfo
				userStaus='покупатель'
					contactInfo={
						<>
							<li>+8 800 555 35-35</li>
							<li>example@email.com</li>
						</>
					}
				/>

				<MyOrders sortOrders={sortOrders} OrdersLogotype='Мои заказы' directionIsColumn={true}>
					{orders.length !== 0 ? null : <NoOrders/>}
					{orders.map((order, index) => (
						
						<Order
							key={index}
							OrderName={order.OrderName}
							OrderPrice={order.OrderPrice}
							OrderStatus={order.OrderStatus}
						/>
					))}
				</MyOrders>
				<UserStats
					returnSum={17896}
					allOrders={12}
					allReturnOrders={2}
					allSuccessfully={10}
					allSum={24325}
					SuccessfullySum={1214}
				/>
			</div>
		</>
	)
}
