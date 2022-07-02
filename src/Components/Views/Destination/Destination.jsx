import {NavLink, useParams} from "react-router-dom";
import './Destination.scss';
import planets from '../../../planets.json';

function Destination() {
    const url = useParams();
    const planet = planets.filter(e => e.name === url['planet'])[0];
    const planetLinks = planets.map((e) => (
        <li key={e.id} className="nav-item">
            <NavLink className="hover-underline-animation" to={`/destination/${e.name}`}> {e.name} </NavLink>
        </li>
    ));

    function getImageUrl(img) {
        return new URL(`../../../assets/img/${img}`, import.meta.url).href;
    }

    return (
        <div>
            <div className="bg-image bg-destination"/>
            <div className="destination-wrapper">
                <div className="destination-container">
                    <div className="heading-5 destination-title">
                        <span className="heading-span">01</span> Pick your destination
                    </div>
                    <img className="planet-img" src={getImageUrl(planet.img)} width="445" height="445"
                         alt={planet.name}></img>
                </div>
                <div className="planet-content">
                    <div className="planet-menu">
                        <ul className="planet-nav-content">
                            {planetLinks}
                        </ul>
                    </div>
                    <div>
                        <div className="heading-1">{planet.name}</div>
                        <div className="body-text">
                            {planet.description}
                        </div>
                        <div className="separator"></div>
                        <div className="planet-details-container">
                            <div>
                                <div className="subheading-2">
                                    avg. distance
                                </div>
                                <div className="subheading-1">
                                    {planet.distance}
                                </div>
                            </div>
                            <div>
                                <div className="subheading-2">
                                    Est. travel time
                                </div>
                                <div className="subheading-1">
                                    {planet.travel}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;