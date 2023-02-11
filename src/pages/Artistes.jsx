import { ArtistesMain } from "../components/Content/Artistes/ArtistesMain";
import { Navbar } from "../components/UI/Navbar";
import { Arrow2 } from "../components/UI/Arrow2";
import "../styles/artistes.css";
import arrow  from "../assets/png/revue/flecheRevue.png";
import { ArtistesMystere } from "../components/Content/Artistes/ArtistesMystere";

export function Artistes() {
    return (

     <div className="artistes">
        <Navbar />
            <main className="artistes-container">

                <ArtistesMain />

                <Arrow2 arrow2={arrow}/>

               <ArtistesMystere />
                
            </main>

     </div>
    )
};