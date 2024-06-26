
import Select from '../../../widgets/select/select'
import classes from './MyOrders.module.css'


export default function MyOrders({
	children,
	sortOrders,
	OrdersLogotype,
	LinkOnOtherProfile,
	directionIsColumn
}) {
	return (
		<section className={classes.MyOrdersSection}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<h2 className={classes.OrdersLogotype}>{OrdersLogotype}</h2>
				<h3>
					<a href='/profile' className={classes.LinkOnOtherProfile}>
						{LinkOnOtherProfile}
					</a>
				</h3>
			</div>
			<Select onChange={sortOrders}>
				<option>Сортировка</option>
				<option>Сортировать по цене</option>
				<option>Сортировать по имени</option>
			</Select>
			<div
				className={classes.OrdersContainer}
				style={{
					flexDirection: directionIsColumn ? 'column' : 'row',
					flexWrap: directionIsColumn ? 'no-wrap' : 'wrap',
				}}
			>
				{children}
			</div>
		</section>
	)
}