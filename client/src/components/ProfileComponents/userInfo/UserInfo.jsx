import defualtProfileImg from '../../../shared/svg/profileImg.svg'
import EditProfile from '../../../shared/img/edit_profile.png'
import classes from './UserInfo.module.css'
import ContactInfo from './contactInfo/ContactInfo'
export default function UserInfo({contactInfo,userStaus}) {
	return (
		<>
			<section className={classes.UserInfoContainer}>
				<div className={classes.relativeContainer}>
					<img src={EditProfile} className={classes.EditIcon} alt='изменить аватар'/>
					<div className={classes.IconProfileContainer}>
						<img
							src={defualtProfileImg}
							className={classes.profileImg}
							alt='иконка профиля'
						/>
					</div>
				</div>

				<div className={classes.relativeContainer}>
					<img src={EditProfile} className={classes.EditIconName} alt='изменить имя'/>
					<p className={classes.UsernameText}>Username</p>
					<p className={classes.UsernameStatus}>{userStaus}</p>
				</div>
				<ContactInfo>
					{contactInfo}
					
				</ContactInfo>
			</section>
		</>
	)
}
