import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Singlepro from './Pages/Singlepro';
import AddBid from './Pages/Addbid';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* @ts-ignore */}
        <Route path='/singlepro' element={<Singlepro />} />
        <Route path='/addbid' element={<AddBid />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
