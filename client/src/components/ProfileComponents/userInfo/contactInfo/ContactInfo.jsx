import classes from './ContactInfo.module.css'

export default function ContactInfo({children}) {
	return (
		<ul className={classes.InfoList}>
			{children}
		</ul>
	)
}