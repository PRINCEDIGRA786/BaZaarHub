import './App.css';
import Navbar from './Components/Navbar';
import Watchlist from './Components/Watchlist';
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import Apii from './Components/Apii';
import Page from './Components/Page';
import Pay from './Components/Pay';
import toget from './State/reducers/tosendid';
import { useDispatch, useSelector } from 'react-redux';
import Offerpage from './Components/Offerpage';
function App() {
  var page = useSelector(state => state.Page)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/pay' element={<Pay />} />
          <Route path='/page' element={<Page page={page} />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path="/grocery" element={<Apii category={'groceries'} />}></Route>
          <Route path="/Fragrances" element={<Apii category={'fragrances'} />}></Route>
          <Route path="/electronics" element={<Apii category={'electronics'} />}></Route>
          <Route path="/appliances" element={<Apii category={'appliances'} />}></Route>
          <Route path="/mobiles" element={<Apii category={'mobiles'} />}></Route>
          <Route path="/watches" element={<Apii category={'watches'} />}></Route>
          <Route path='/fashion' element={<Apii category={'fashion'} />}></Route>
          <Route path='/offers' element={<Offerpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

