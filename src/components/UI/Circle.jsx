import { useState } from 'react';
import circleGif from "../../assets/gif/circle.gif";


export function Circle(){
    const [gif, setGifSrc] = useState("");
    const gifSrc = () => {
        setGifSrc(circleGif)
    }
    
    return(
        <img src={circleGif} alt="Gif" className="revue-gif" />
    )
}
