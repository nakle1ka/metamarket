
import classes from './MyOrders.module.css'


export default function MyOrders({children}){
    return (
			<section className={classes.MyOrdersSection}>
				<h2 className={classes.OrdersLogotype}>Мои заказы</h2>
                <div className={classes.OrdersContainer}>
                    {children}
                </div>
			</section>
		)
}