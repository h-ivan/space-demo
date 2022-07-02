import Home from './Components/Views/Home/Home.jsx';
import Navbar from './Components/Shared/Navbar/Navbar.jsx';
import Destination from './Components/Views/Destination/Destination.jsx';
import Technology from './Components/Views/Technology/Technology.jsx';
import About from './Components/Views/About/About.jsx';
import NotFound from "./Components/Views/NotFound/NotFound.jsx";
import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useEffect} from "react";


export default function App() {

    useEffect(() => {
            //IOS SCROLL FIX
            const _overlay = document.getElementById('overlay');
            let _clientY = null;
            _overlay.addEventListener('touchstart', function (event) {
                if (event.targetTouches.length === 1) {
                    _clientY = event.targetTouches[0].clientY;
                }
            }, false);

            _overlay.addEventListener('touchmove', function (event) {
                if (event.targetTouches.length === 1) {
                    disableRubberBand(event);
                }
            }, false);

            function disableRubberBand(event) {
                const clientY = event.targetTouches[0].clientY - _clientY;
                if (_overlay.scrollTop === 0 && clientY > 0) {
                    event.preventDefault();
                }
                if (isOverlayTotallyScrolled() && clientY < 0) {
                    event.preventDefault();
                }
            }

            function isOverlayTotallyScrolled() {
                return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
            }

    }, []);

    return (
        <div className="main-wrapper">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/destination/:planet" element={<Destination/>}/>
                    <Route path="/technology/:vehicle" element={<Technology/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/destination" element={<Navigate replace to="/destination/moon"/>}/>
                    <Route path="/technology" element={<Navigate replace to="/technology/launch-vehicle"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}