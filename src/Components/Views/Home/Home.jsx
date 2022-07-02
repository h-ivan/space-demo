import './Home.scss'
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="bg-image bg-home"/>
                <div className="heading-5">so, you want to travel to</div>
                <div className="heading-1 space">space</div>
                <div className="body-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer
                    space
                    and
                    not hover kind of on
                    the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </div>
            </div>
            <Link to="/destination/moon" className="explore">
                <div className="explore-hover scale-up-center"/>
                <div className="heading-4 explore-text">
                    explore
                </div>
            </Link>
        </div>
    )
}

export default Home