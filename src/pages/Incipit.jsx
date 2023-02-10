import '../styles/incipit-mobile.css';
import bg from "../assets/png/incipit/bg.png";

export function Incipit() {
    return (

     <div className="incipit">   

        {/* <img classname="bg-img" src={bg} alt="" srcset="" /> */}

        <p className="incipit-page-title title-mystère">  MYSTERE </p>
        <p className="incipit-page-title title-bibliothèque"> <a href="/bibliotheque"> LA BIBLIOTHEQUE </a></p>
        <p className="incipit-page-title title-revue">  <a href="/revue"> LA REVUE </a></p>
        <p className="incipit-page-title title-communauté"> <a href="/communaute"> LA COMMUNAUTE </a></p>
        <p className="incipit-page-title title-artistes"> <a href="/artistes"> LES  ARTISTES </a></p>

    </div>

    )
};