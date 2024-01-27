import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "Shut up",
        bottomText: "and take my money",
        randomImageUrl: "https://i.imgflip.com/3si4.jpg"
    })

    const [allMemes, setAllMemes] = useState(memesData);

    function getNewImage(){
        const memes = allMemes.data.memes;
        const randomMeme = memes[Math.floor(Math.random()*memes.length)];
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImageUrl: randomMeme.url
            }
        })
    }

    function updateMeme(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return ( 
       <main>
            <div className="form">
                <div className="form-input-container">
                    <label className="form-label">Top text</label>
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Shut up"
                        name="topText"
                        value={meme.topText}
                        onChange={updateMeme}
                    />
                </div>
                <div className="form-input-container">
                    <label className="form-label">Bottom text</label>
                    <input 
                        type="text" 
                        className="form-input" 
                        placeholder="and take my money"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={updateMeme}
                    />
                </div>
            
                <button className="form-button" onClick={getNewImage}>Get a new meme image  🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImageUrl} alt="Meme image" className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
       </main>
     );
}
 
export default Meme;