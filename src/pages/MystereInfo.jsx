import { Navbar } from "../components/UI/Navbar";
import { InfoMain} from "../components/Content/Info/InfoMain"
import "../styles/info.css";
import { InfoRevue } from "../components/Content/Info/InfoRevue";
import { useParams } from "react-router-dom";

import mystere1 from "../assets/png/revue/mystere1.png";
import mystere2 from "../assets/png/revue/mystere2.png";

export function MystereInfo() {
    
    let { id } = useParams();

    if (id === "2") {
        return (
            <div className="info">
               <Navbar />
               <main className="info-container">
       
               <InfoMain />
               <InfoRevue mystereImg={mystere2}/>
       
               </main> 
            </div>
           )
    } else {
        return (
            <div className="info">
               <Navbar />
               <main className="info-container">
       
               <InfoMain />
               <InfoRevue mystereImg={mystere1}/>
       
               </main> 
            </div>
           )
    }
    
};