import classes from './UserStats.module.css'

export default function UserStats({
	allOrders,
	allSuccessfully,
	allReturnOrders,
	allSum,
	SuccessfullySum,
	returnSum,
}) {
	return (
		<section className={classes.StatsSection}>
			<h2 className={classes.StatsLogotype}>Статистика</h2>
			<ul className={classes.UserStatsList}>
				<li>
					<span>Всего заказов</span>
					{allOrders}
				</li>
				<li>
					<span>Успешно</span>
					{allSuccessfully}
				</li>
				<li><span>Возврат</span>{allReturnOrders}</li>
				<li><span>Общая сумма</span>{allSum}</li>
				<li><span>Сумма успешных</span>{SuccessfullySum}</li>
				<li><span>Сумма возврата</span>{returnSum}</li>
			</ul>
		</section>
	)
}
