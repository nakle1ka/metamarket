import MyOrders from '../../components/ProfileComponents/MyOrders/MyOrders'
import Order from '../../components/ProfileComponents/MyOrders/Order/order'
import UserInfo from '../../components/ProfileComponents/userInfo/UserInfo'
import classes from './Profile.module.css'

export default function Profile() {
	return (
		<>
			<div className={classes.ProfileContainer}>
				<UserInfo />
				<MyOrders>
					<Order
						OrderName='ноутбук клевый'
						OrderPrice='50000'
						OrderStatus='куплен'
					/>
					<Order
						OrderName='ноутбук клевый'
						OrderPrice='50000'
						OrderStatus='куплен'
					/>
					
				</MyOrders>
			</div>
		</>
	)
}
