import classes from './CheckBox.module.css'

export default function CheckBox({inputId}){
    return (
			<div>
				<input type='checkbox' className={classes.CheckBox} id={inputId} />
				<label htmlFor={inputId} className={classes.CheckBoxLabel}></label>
			</div>
		)
}