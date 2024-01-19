import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {

    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3si4.jpg");

    function getNewMeme(){
        const memes = memesData.data.memes;
        const randomMeme = memes[Math.floor(Math.random()*memes.length)];
        setMemeImage(randomMeme.url);
    }
    return ( 
       <main>
            <div className="form">
                <div className="form-input-container">
                    <label className="form-label">Top text</label>
                    <input type="text" className="form-input" placeholder="Shut up"/>
                </div>
                <div className="form-input-container">
                    <label className="form-label">Bottom text</label>
                    <input type="text" className="form-input" placeholder="and take my money"/>
                </div>
            
                <button className="form-button" onClick={getNewMeme}>Get a new meme image  🖼</button>
            </div>
            <img src={memeImage} alt="Meme image" className="meme-image" />
       </main>
     );
}
 
export default Meme;