import UserInfo from '../../components/ProfileComponents/userInfo/UserInfo'
import classes from './SallerProfile.module.css'
import MyOrders from '../../components/ProfileComponents/MyOrders/MyOrders'
import Order from '../../components/ProfileComponents/MyOrders/Order/order'
import { useState, useRef } from 'react'
import Modal from '../../widgets/modal/modal'
import { sortByName, sortByPrice } from '../profilePage/Profile'
import Reviews from '../../widgets/Reviews/reviews'
import NoOrders from '../../components/ProfileComponents/NoOrders/NoOrders'

export default function SallerProfile() {
	const modalRef = useRef()
	const [reviews, setReviews] = useState([
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
		{ UserName: 'sosiskaKiller', grade: 5, reviewText: 'Говно не понравилось' },
	])
	const [orders, setOrders] = useState([
		{
			OrderName: 'в',
			OrderPrice: 50000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'а',
			OrderPrice: 10000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'в',
			OrderPrice: 5000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'в',
			OrderPrice: 50000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'ноутбук HP300 tl',
			OrderPrice: 10000,
			OrderStatus: 'куплен',
		},
		{
			OrderName: 'в',
			OrderPrice: 5000,
			OrderStatus: 'куплен',
		},
	])

	function onCloseClick() {
		if (modalRef.current) {
			modalRef.current.close()
		}
	}
	function openModal() {
		if (modalRef.current) {
			modalRef.current.showModal()
		}
	}
	function sortOrders(e) {
		if (e.target.value === 'Сортировать по цене') {
			setOrders(prev => {
				return sortByPrice(prev)
			})
		} else if (e.target.value === 'Сортировать по имени') {
			setOrders(prev => sortByName(prev))
		} else {
			return null
		}
	}

	return (
		<div className={classes.ProfileContainer}>
			<UserInfo
				userStaus='продавец'
				contactInfo={
					<>
						<li>+8 800 555 35-35</li>
						<li>example@email.com</li>
						<li onClick={openModal} className={classes.liElement}>
							5.0 (2 оценки)
						</li>
					</>
				}
			/>

			<Modal logotype='Отзывы' ref={modalRef} onCloseClick={onCloseClick}>
				{reviews.map((review,index) => {
					return (
						<Reviews
						key={index}
							userName={review.UserName}
							grade={review.grade}
							reviewText={review.reviewText}
						/>
					)
				})}
			</Modal>

			<MyOrders
				OrdersLogotype='Мои товары'
				LinkOnOtherProfile='перейти к заказам >'
				sortOrders={sortOrders}
			>
				{orders.length !== 0 ? null : <NoOrders />}
				{orders.map((order, index) => (
					<Order
						style={{ flexDirection: 'column' }}
						key={index}
						OrderName={order.OrderName}
						OrderPrice={order.OrderPrice}
					/>
				))}
			</MyOrders>
		</div>
	)
}
