import { Link } from "react-router-dom";
import { BibliothequeMain } from "../components/Content/Bilbiotheque/BibliothequeMain";
import { Navbar } from "../components/UI/Navbar";

import "../styles/bibliotheque.css"

export function Bibliotheque() {
    return (

     <div className="bibliotheque">
        <Navbar />
        
            <main className="bibliotheque-container">

                <BibliothequeMain />

            </main>
     </div>
    )
};