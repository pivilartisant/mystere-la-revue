import { ArtistesMain } from "../components/Content/Artistes/ArtistesMain";
import { Navbar } from "../components/UI/Navbar";
import { Arrow2 } from "../components/UI/Arrow2";
import "../styles/artistes.css";
import arrow  from "../assets/png/revue/flecheRevue.png";

export function Artistes() {
    return (

     <div className="artistes">
        <Navbar />
            <main className="artistes-container">

                <ArtistesMain />

                <Arrow2 arrow2={arrow}/>

                <div className="mystere-artist-container">

                <div className="mystere-2-artist-container">
                    <div className="mystere-2-title-container">
                            <p className="mystere-2-title">Numéro 2 : <br></br> La liberté en politique</p>
                    </div>

                    <div className="mystere-2-artist">

                        <ul className="mystere-2-artist-list">
                            <li>Carmen Verheijen <br></br> <em> Photographe </em> </li>
                            <li>Emma Santos <br></br> <em> Peintre</em></li>
                            <li>Noah Tijenda <br></br><em> Photojournaliste</em></li>
                            <li> Mark Marra  <br></br> <em>Photojournaliste</em> </li>
                            <li> Ali Mohamed <br></br> <em>Photojournaliste </em></li>
                            <li>Edward Hu <br></br><em> Designer</em></li>

                        </ul>
                       
                    </div>

                </div>

                <div className="mystere-1-artist-container">
                    <div className="mystere-1-title-container">
                            <p className="mystere-1-title">Numéro 1 : <br></br> La Contreverse</p>
                    </div>

                    <div className="mystere-1-artist">
                        <ul className="mystere-1-artist-list">
                                <li>Léa Besson <br></br> <em> Graphiste</em></li>
                                <li> Inés Vanlaeys <br></br> <em>Peintre </em></li>
                                <li>  Arcane 17 <br></br><em> Artiste plastique</em></li>
                                <li>  Cy <br></br><em>Artiste plastique</em></li>
                        </ul>
                    </div>

                </div>
            </div>
                
            </main>

     </div>
    )
};