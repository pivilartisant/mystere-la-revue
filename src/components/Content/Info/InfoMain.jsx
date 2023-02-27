import { Line1 } from "../../UI/Line1";
import { useParams } from "react-router-dom";
import trait from "../../../assets/png/artistes/trait1.png";

export function InfoMain () {

    let { id } = useParams();
    
        if (id === "2") {
            return (
                <div className="info-main-content">
                <div className="info-main-content-container">       
                    <div className="info-title-container">
                        <p className="info-title">Numéro 2 : La liberté en politique</p>
                        <Line1 trait={trait}/>
                    </div>
                    <div className="info-text-container">
                        <p className="info-text">
                        Liberté... Concept confus et fourre-tout que l’on prône comme idéal universel sans que quiconque puisse le définir clairement.<br></br> <br></br>
        
                        Au fil des pages, plusieurs intervenant.e.s explorent les diffèrent types de libertés et la place qu’elles occupent dans les systèmes politiques. Nous faisons un 360 de toutes les facettes du sujet en passant du néocolonialisme à l’anarchisme pour établir les bases fondamentales de la notion de liberté en politique. N’ayons pas peur de remettre en question les systèmes que l’on connaît, ou que l’on pense connaître et les apriorismes que nous avons sur les autres.</p>
        
                    </div>
                 </div>
            </div>
            )
        } else {
            return (
                <div className="info-main-content">
                <div className="info-main-content-container">       
                    <div className="info-title-container">
                        <p className="info-title">Numéro 1 : Contreverse</p>
                        <Line1 trait={trait}/>
                    </div>
                    <div className="info-text-container">
                        <p className="info-text">
                        Le premier numéro, très experimental, se questionne autour d’une question : comment vivre en Homme juste ?
                        <br></br> <br></br>
                        Ce numéro tente de donner les clefs nécessaires au lecteur.ice pour qu’iel puisse developper son esprit critique et se positionner face aux multiples controverses qui animent le débat public . 
                        </p>
        
                    </div>
                 </div>
            </div>
            )
        }
}