import classes from './ContactInfo.module.css'

export default function ContactInfo({ telephone, email, reviews }) {
	return (
		<ul className={classes.InfoList}>
			<li className={classes.ItemInfoList}>{telephone}</li>
			<li className={classes.ItemInfoList}>{email}</li>
			<li className={classes.ItemInfoList}>{reviews}</li>
		</ul>
	)
}