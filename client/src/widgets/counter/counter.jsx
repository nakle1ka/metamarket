import classes from './counter.module.css'


export default function Counter({ children, onClickButtonOne, onClickButtonTwo }) {
	return (
		<div className={classes.CounterContainer}>
			<button
				onClick={onClickButtonOne}
				className={classes.CounterButton}
				id={classes.buttonOne}
			/>
			{children}
			<button
				onClick={onClickButtonTwo}
				className={classes.CounterButton}
				id={classes.buttonTwo}
			/>
		</div>
	)
}