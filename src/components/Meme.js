const Meme = () => {
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
            
                <button className="form-button">Get a new meme image  🖼</button>
            </div>
       </main>
     );
}
 
export default Meme;