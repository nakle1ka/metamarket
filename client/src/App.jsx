import './style.css'
import Header from './components/Main/Header/Header'
import Footer from './components/Main/Footer/Footer'
import Main from './pages/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profilePage/Profile'
import SallerProfile from './pages/SallerProfile/SallerProfile'
import Basket from './pages/basketPage/Basket'


function App() {
	
	return (
		<div style={{ padding: '20px' }}>
			{/* <Header /> */}
			<main>
				<BrowserRouter>
					<Routes>
						<Route index element={<Main />} />
						<Route
							path='/SallerProfile'
							element={
								<SallerProfile />
							}
						/>
						<Route
							path='/profile'
							element={<Profile />}
						/>
						<Route
						path='/Basket'
						element={<Basket/>}/>
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	)
}

export default App
