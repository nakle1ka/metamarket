import defualtProfileImg from '../../../shared/svg/profileImg.svg'
import EditProfile from '../../../shared/img/edit_profile.png'
import classes from './UserInfo.module.css'
import ContactInfo from './contactInfo/ContactInfo'
export default function UserInfo() {
	return (
		<>
			<section className={classes.UserInfoContainer}>
				<div className={classes.relativeContainer}>
					<img src={EditProfile} className={classes.EditIcon} />
					<div className={classes.IconProfileContainer}>
						<img src={defualtProfileImg} className={classes.profileImg} alt='иконка профиля'/>
					</div>
				</div>

				<div className={classes.relativeContainer}>
					<img src={EditProfile} className={classes.EditIconName} />
					<p className={classes.UsernameText}>Username</p>
					<p className={classes.UsernameStatus}>покупатель</p>
				</div>
				<ContactInfo
					telephone='+8 800 555 35-35'
					email='example@email.com'
					reviews='5.0 (2 оценки)'
				/>
			</section>
		</>
	)
}
