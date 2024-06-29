import classes from './Order.module.css'
import TestImage from './image 15.png'
export default function Order({
	OrderName,
	OrderPrice,
	OrderStatus,
	OrderSrc,
	style,
	counterForBasket,
	checkedForBasket,
	deleteForBasket
}) {
	return (
		<article className={classes.OrderArticle} style={style}>
			<div className={classes.Wrapper}>
				{checkedForBasket}
				<div>
					<img
						src={TestImage}
						className={classes.OrderSrc}
						alt='картинка товара'
					/>
				</div>
				<div>
					<h3 className={classes.OrderName}>{OrderName}</h3>
					<p className={classes.OrderPrice}>{OrderPrice}</p>
					<p className={classes.OrderStatus}>{OrderStatus}</p>
					{counterForBasket}
				</div>
			</div>
			{deleteForBasket}
		</article>
	)
}
