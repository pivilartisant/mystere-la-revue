import trait from "../../../assets/png/artistes/trait1.png"
import { Line1 } from "../../UI/Line1"

export function ArtistesMystere(){
    return (
        <div className="mystere-artist-content">
             <div className="mystere-artist-content-container">
                <div className="mystere-2-artist-container">

                    

                         <div className="mystere-2-artist-title-container">
                                 <p className="mystere-2-artist-title">Numéro 2 : <br></br> La liberté en politique</p>
                                 <Line1 trait={trait}/>
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
                    <div className="mystere-1-title-artist-container">
                            <p className="mystere-1-artist-title">Numéro 1 : <br></br> La Contreverse</p>
                            <Line1 trait={trait}/>
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
        </div>
    )
};