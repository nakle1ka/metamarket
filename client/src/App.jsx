import './style.css'
import Header from './components/Main/Header/Header'
import Footer from './components/Main/Footer/Footer'
import Main from './pages/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profilePage/Profile'

function App() {
	return (
		<div style={{ padding: '20px' }}>
			<Header />
			<main>
				<BrowserRouter>
					<Routes>
						<Route index element={<Main/>}/>

						<Route path='/profile' element={<Profile />} />
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	)
}

export default App
