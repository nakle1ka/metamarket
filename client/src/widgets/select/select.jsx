import classes from './Select.module.css'


export default function Select({ onChange,children }) {
	return (
		<select className={classes.SelectSort} onChange={onChange}>
			{children}
		</select>
	)
}