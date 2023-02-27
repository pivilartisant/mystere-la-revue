import { Navbar } from "../components/UI/Navbar";
import { Arrow1 } from "../components/UI/Arrow1";
import { RevuesMystere } from "../components/Content/Revue/RevuesMystere";
import { RevueMain } from "../components/Content/Revue/RevueMain";

import "../styles/revue.css";

import arrow  from "../assets/png/revue/flecheRevue.png";
import mystere1 from "../assets/png/revue/mystere1.png";
import mystere2 from "../assets/png/revue/mystere2.png";



export function Revue() {
    return (
     <div className="revue">
        <Navbar />
        <main className="revue-container">

        <RevueMain />

        <Arrow1 arrow1={arrow} />
        
        <RevuesMystere mystere1={mystere1} mystere2={mystere2}/>
        
        </main> 
     </div>
    )
};