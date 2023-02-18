import '../styles/incipit.css';
import logo from '../assets/png/incipit/logo.png'

export function Incipit() {
    return (

     <div className="incipit">  
    
        <div className="incipit-container">
            <div className="incipit-main-content">
                <div className="incipit-logo-container">
                    <a href="/revue">
                        <img className="incipit-logo" alt="mystere-log" src={logo}/>
                    </a>
                </div>

                {/* <div className="incipit-link-container">
                    <p className="incipit-link">  Entrez & découvrez Mystère </p>
                </div> */}
            </div>
        </div>
    </div>

    )
};