import classes from './Modal.module.css'

export default function Modal({ children, logotype, isOpen }) {
	return (
		<dialog open={isOpen} className={classes.Modal}>
			<h3 className={classes.ModalLogotype}>{logotype}</h3>
			<div className={classes.reviewsContainer}>{children}</div>
			<button>{}</button>
		</dialog>
	)
}
