import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/NotFound/Notfound'
import Blogs from './Components/Blogs/Blogs';
import AboutMe from './Components/AboutMe/AboutMe';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App services">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path ='/blogs' element ={<Blogs></Blogs>}></Route>
        <Route path ='/about' element ={<AboutMe></AboutMe>}></Route>
        <Route path ='home/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path ='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
