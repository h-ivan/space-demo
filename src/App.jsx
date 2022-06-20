import './assets/css/styles.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Destination from './components/Destination.jsx';
import NotFound from "./components/NotFound.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

export default function App() {
    return (
        <div className="main-wrapper">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/destination/:planet" element={<Destination/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/destination" element={<Navigate replace to="/destination/moon"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}