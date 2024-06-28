import React from 'react'
import classes from './Modal.module.css'

 const Modal =React.forwardRef(({ children, logotype,onCloseClick},ref) =>{
	
	return (
		<dialog className={classes.Modal} ref={ref}>
			<div className={classes.LogotypeButtonContainer}>
				<h3 className={classes.ModalLogotype}>{logotype}</h3>
				<button className={classes.CloseButton} onClick={onCloseClick}></button>
			</div>

			<div className={classes.reviewsContainer}>{children}</div>
		</dialog>
	)
})
export default Modal