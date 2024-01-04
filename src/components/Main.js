import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Banner from './pages/Banner';
import About from './pages/About'
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';

const Main = () =>{
    return (
        <Routes>
            
            <Route path='/' element={<Banner/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/booking' element={<Reservations />}></Route>

        </Routes>
    )
}

export default Main;