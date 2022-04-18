import './App.css';
import Header from './components/Pages/Shared/Header/Header';
import Footer from './components/Pages/Shared/Footer/Footer';
import Blogs from './components/Pages/Blogs/Blogs';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import { Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut/></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
