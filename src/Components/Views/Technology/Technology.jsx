import {NavLink, useParams} from "react-router-dom";
import './Technology.scss';
import technology from '../../../technology.json';
import {useEffect, useState} from "react";

function Technology() {

    const url = useParams();
    const tech = technology.filter(e => e.url === url['vehicle'])[0];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 940 ? '' : '-sm';

    const techLinks = technology.map((e) => (
        <li key={e.id} className="nav-item">
            <NavLink className={({isActive}) =>
                (isActive ? "explore-tech active-tech" : "explore-tech")}
                     to={`/technology/${e.url}`}>
                <span>{e.id}</span>
            </NavLink>
        </li>
    ));

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getImageUrl(img) {
        return new URL(`../../../assets/img/${img + imageUrl}.jpg`, import.meta.url).href;
    }

    return (
        <div>
            <div className="bg-image bg-technology"/>
            <div className="heading-5 tech-title">
                <span className="heading-span">02</span> space launch 101
            </div>
            <div className="tech-wrapper">
                <div className="tech-container">
                    <div>
                        <ul className="tech-nav-content">
                            {techLinks}
                        </ul>
                    </div>
                    <div>
                        <div className="body-text-condensed">THE TERMINOLOGY…</div>
                        <div className="heading-3">{tech.title}</div>
                        <div className="body-text">
                            {tech.description}
                        </div>
                    </div>
                </div>
                <div className="tech-content">
                    <img className="tech-img" src={getImageUrl(tech.img)} width="515" height="527"
                         alt={tech.title}></img>
                </div>
            </div>
        </div>
    );
}

export default Technology;