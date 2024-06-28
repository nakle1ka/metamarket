import BasketElements from '../../components/BasketComponents/BasketElements/BasketElemnts'
import ResultPrice from '../../components/BasketComponents/ResultPrice/ResultPrice'
import Order from '../../components/ProfileComponents/MyOrders/Order/order'
import CheckBox from '../../widgets/CheckBox/CheckBox'
import Counter from '../../widgets/counter/counter'

import classes from './Basket.module.css'


export default function Basket(){
    return (
			<section className={classes.BasketSection}>
				<BasketElements logotype='корзина'>
					<Order
						counterForBasket={<Counter />}
						OrderName='Call of duty'
						OrderPrice='1999'
						checkedForBasket={<CheckBox inputId={123} />}
					/>
					<Order
						counterForBasket={<Counter />}
						OrderName='Call of duty'
						OrderPrice='1999'
						checkedForBasket={<CheckBox inputId={123} />}
					/>
					
				</BasketElements>
				<ResultPrice logotype='Итого' all='1' select='10' price='10000'/>
			</section>
		)
}