import BuyButton from '../../../widgets/buyButton/buyButton'
import classes from './ResultPrice.module.css'

export default function ResultPrice({logotype, all, select, price}) {
	return (
		<section className={classes.ResultPriceSection}>
			<h3 className={classes.SectionLogotype}>{logotype}</h3>
			<div className={classes.ItemsContainer}>
				<ul className={classes.ElementsList}>
					<li>
						<span>Всего</span>
						{all}
					</li>
					<li>
						<span>Выбрано</span>
						{select}
					</li>
					<li>
						<span>К оплате</span>
						{price}
					</li>
				</ul>
                <BuyButton>купить</BuyButton>
			</div>
		</section>
	)
}