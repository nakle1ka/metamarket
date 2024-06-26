import UserInfo from "../../components/ProfileComponents/userInfo/UserInfo"
import classes from './SallerProfile.module.css'
import MyOrders from "../../components/ProfileComponents/MyOrders/MyOrders"
import Order from "../../components/ProfileComponents/MyOrders/Order/order"
import { useState } from "react"
import {sortByName,sortByPrice} from '../profilePage/Profile'
export default function SallerProfile({ changeIsProfileTrue }) {
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
		{
			OrderName: 'в',
			OrderPrice: 50000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'ноутбук HP300 tl',
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
		<div className={classes.ProfileContainer}>
			<UserInfo
				userStaus='продавец'
				contactInfo={
					<>
						<li>+8 800 555 35-35</li>
						<li>example@email.com</li>
						<li>5.0 (2 оценки)</li>
					</>
				}
			/>
			<MyOrders
			
				OrdersLogotype='Мои товары'
				LinkOnOtherProfile='перейти к заказам >'
				sortOrders={sortOrders}
				
				
			>
				{orders.map((order, index) => (
					<Order style={{flexDirection:'column'}}
						key={index}
						OrderName={order.OrderName}
						OrderPrice={order.OrderPrice}
						
					/>
				))}
			</MyOrders>
		</div>
	)
}