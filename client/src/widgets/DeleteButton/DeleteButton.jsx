import classes from './DeleteButton.module.css'

export default function DeleteButton({onClick}) {
	return <button className={classes.DeleteButton} onClick={onClick} />
}