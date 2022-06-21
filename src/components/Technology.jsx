import {NavLink, useParams} from "react-router-dom";
import technology from '../technology.json';

function Technology() {
    const url = useParams();
    const tech = technology.filter(e => e.url === url['vehicle'])[0];
    const techLinks = technology.map((e) => (
        <li key={e.id} className="nav-item">
            <NavLink  className="hover-underline-animation" to={`/technology/${e.url}`}> {e.id} </NavLink>
        </li>
    ));

    function getImageUrl(img) {
        return new URL(`../assets/img/${img}`, import.meta.url).href
    }

    return (
        <div>
            <div className="bg-image bg-technology kenburns-bottom-right"/>
            <div className="destination-wrapper">
                <div className="destination-planet-container">
                    <div className="heading-5 destination-title">
                        <span className="destination-heading-span">02</span> space launch 101
                    </div>
                    <img className="planet-img" src={getImageUrl(tech.img)} width="515" height="527"
                         alt="moon"></img>
                </div>
                <div className="planet-content">
                    <div className="planet-menu">
                        <ul className="planet-nav-content">
                            {techLinks}
                        </ul>
                    </div>
                    <div>
                        <div className="heading-1 planet">{tech.title}</div>
                        <div className="body-text">
                            {tech.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;