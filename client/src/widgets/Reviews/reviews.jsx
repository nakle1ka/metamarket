import test from '../../shared/img/user.png'
import classes from './Reviews.module.css'

export default function Reviews({ userName, grade, reviewText }) {
	return (
		<div className={classes.reviewContainer}>
			<div className={classes.flexContainer}>
                <img src={test} className={classes.UserAvatar}/>
				<h3 className={classes.gradeAndUsername}>
					<p>{userName}</p>
					<p>{grade}</p>
				</h3>
			</div>
			<p className={classes.reviewText}>{reviewText}</p>
		</div>
	)
}