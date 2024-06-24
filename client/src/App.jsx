import './style.css';
import Header from './components/Main/Header/Header';
import Megasale from './components/Main/Megasale/Megasale';
import PopularProduct from './components/Main/PopularPoruduct/PopularProduct';
import Footer from './components/Main/Footer/Footer';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <main>
        <Megasale />
        <PopularProduct />
      </main>
      <Footer />
    </div>
  );
}

export default App;
