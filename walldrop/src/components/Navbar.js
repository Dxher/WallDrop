import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/" className='title'><h1>WallDrop</h1></a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
            <a href="/Upload">Upload</a>
            <a href="/Join" style={{
                color: "white",
                backgroundColor: "gray",
                padding: "0.5rem",
                borderRadius: "8px"
            }}>Join</a>
        </nav>
     );
}
 
export default Navbar;