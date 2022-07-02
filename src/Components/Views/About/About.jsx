import './About.scss'

function About() {
    return (
        <div>
            <div className="bg-image bg-about"/>
            <div className="about-container">
                <p className="about-title">
                    This demo was created by Iván Herman using:
                </p>
                <div>
                    <ul className="about-list">
                        <li>
                            React Js
                        </li>
                        <li>
                            Vite
                        </li>
                        <li>
                            React Router
                        </li>
                        <li>
                            Sass
                        </li>
                    </ul>
                    <p className="about-title">Based on Frontend Mentor challenge:</p>
                    <a target="_blank" className="about-link" href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">
                        Space tourism multi-page website
                    </a>
                    <p className="about-title">Contact:</p>
                    <a target="_blank" className="about-link" href="mailto:ivan.herman77@gmail.com">ivan.herman77@gmail.com</a>
                    <a target="_blank" className="about-link" href="src/Components/Views/About/About.jsx">Linkedin</a>
                </div>
            </div>
        </div>
    );
}

export default About;