import MyOrders from '../../components/ProfileComponents/MyOrders/MyOrders'
import Order from '../../components/ProfileComponents/MyOrders/Order/order'
import UserStats from '../../components/ProfileComponents/UserStats/UserStats'
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

					<Order
						OrderName='ноутбук клевый'
						OrderPrice='50000'
						OrderStatus='куплен'
					/>
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
