import classes from './counter.module.css'


export default function Counter({ counter, onClickButtonOne, onClickButtonTwo }) {
	return (
		<div className={classes.CounterContainer}>
			<button
				onClick={onClickButtonOne}
				className={classes.CounterButton}
				id={classes.buttonOne}
			/>
			{counter}
			<button
				onClick={onClickButtonTwo}
				className={classes.CounterButton}
				id={classes.buttonTwo}
			/>
		</div>
	)
}