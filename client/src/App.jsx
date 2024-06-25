import './style.css'
import Header from './components/Main/Header/Header'
import Footer from './components/Main/Footer/Footer'
import Main from './pages/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profilePage/Profile'
import { useState } from 'react'

function App() {
	const [isProfile,setIsProfile] = useState(false)
	function changeIsProfile(){
		isProfile ? setIsProfile(false) : setIsProfile(true)
	}
	return (
		<div style={{ padding: '20px' }}>
			<Header isProfile={isProfile} />
			<main>
				<BrowserRouter>
					<Routes>
						<Route index element={<Main />} />

						<Route
							path='/profile'
							element={<Profile changeIsProfile={changeIsProfile} />}
						/>
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	)
}

export default App
