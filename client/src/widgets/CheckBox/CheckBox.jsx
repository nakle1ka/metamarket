import classes from './CheckBox.module.css'

export default function CheckBox({inputId,onChange}){
    return (
			<div>
				<input type='checkbox' className={classes.CheckBox} id={inputId}  onChange={onChange} />
				<label htmlFor={inputId} className={classes.CheckBoxLabel}></label>
			</div>
		)
}