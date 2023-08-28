import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Coins from './components/coins';
import Exchanges from './components/exchanges';
import Coindetails from './components/coindetails';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges />}/>
        <Route path="/coin/:id" element={<Coindetails />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
