import { CommunauteMain } from "../components/Content/Communaute/CommunauteMain";
import { Navbar } from "../components/UI/Navbar";
import "../styles/communaute.css"
import circle from "../assets/png/circle.gif";

export function Communaute() {
    return (

     <div className="communaute">
        <Navbar />

            <main className="communaute-container">
                <CommunauteMain />

                {/* <img src={circle} alt="circle Animation" /> */}
            </main>
                
     </div>
    )
};