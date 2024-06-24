import classes from './Order.module.css'
import TestImage from './image 15.png'
export default function Order({OrderName,OrderPrice,OrderStatus,OrderSrc}){
    return (
			<article className={classes.OrderArticle}>
				<div>
					<img src={TestImage} className={classes.OrderSrc} />
				</div>
				<div>
					<h3 className={classes.OrderName}>{OrderName}</h3>
					<p className={classes.OrderPrice}>{OrderPrice}</p>
					<p className={classes.OrderStatus}>{OrderStatus}</p>
				</div>
			</article>
		)
}