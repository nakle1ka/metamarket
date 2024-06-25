
import classes from './MyOrders.module.css'


export default function MyOrders({children,sortOrders}){
    return (
			<section className={classes.MyOrdersSection}>
				<h2 className={classes.OrdersLogotype}>Мои заказы</h2>
				<select className={classes.SelectSort} onChange={sortOrders}>
					<option>Сортировка</option>
					<option>Сортировать по цене</option>
					<option>Сортировать по имени</option>
				</select>
				<div className={classes.OrdersContainer}>{children}</div>
			</section>
		)
}