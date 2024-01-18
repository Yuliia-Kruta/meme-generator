const Header = () => {
    return ( 
        <header className="header">
            <img src={`${process.env.PUBLIC_URL}/images/troll-face.png`} alt="Logo" className="header-image" />
            <h2 className="header-text">Yuliia's Meme Generator</h2>
        </header>
     );
}
 
export default Header;