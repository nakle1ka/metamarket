import defualtProfileImg from '../../shared/svg/profileImg.svg'
import EditProfile from '../../shared/img/edit_profile.png'
import classes from './UserInfo.module.css'
export default function UserInfo() {
	return (
		<>
			<div className={classes.UserInfoContainer}>
				<div className={classes.relativeContainer}>
					<img src={EditProfile} className={classes.EditIcon} />
					<div className={classes.IconProfileContainer}>
						<img src={defualtProfileImg} className={classes.profileImg} />
					</div>
				</div>

				<div className={classes.relativeContainer}>
					<img src={EditProfile} className={classes.EditIconName} />
					<p className={classes.UsernameText}>Username</p>
					<p className={classes.UsernameStatus}>покупатель</p>
				</div>
				<ul className={classes.InfoList}>
					<li className={classes.ItemInfoList}>+8 800 555 35 35</li>
					<li className={classes.ItemInfoList}>example@email.com</li>
					<li className={classes.ItemInfoList}>5.0 (2 отзыва)</li>
				</ul>
			</div>
		</>
	)
}
