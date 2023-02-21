import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export function Navbar() {
    return (
     <div className="navbar">

        <div className="navbar-container">
                <ul className="nav-list">
                    <li>  <Link className="link" to="/revue">LA REVUE</Link> </li>
                    <li>  <Link className="link" to="/bibliotheque"> LA BIBLIOTHEQUE</Link></li>
                    <li>  <Link className="link" to="/artistes">LES ARTISTES</Link></li>
                    <li>  <Link className="link" to="/communaute">LA COMMUNAUTE</Link></li>
                </ul>
        </div>
    </div>
    )
};