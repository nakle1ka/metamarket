import classes from './BuyButton.module.css'
export default function BuyButton({ children, onClick }) {
	return (
		<button className={classes.Button} onClick={onClick}>
			{children}
		</button>
	)
}