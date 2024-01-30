import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';


const Header = () => {
    return(
    <div className="main-container">
        <nav className="header__navigation">
        <div className="navigation">
            <div className="arrows">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Left Arrow"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Right Arrow"/>
                </button>
             </div>
            <div className="header__search">
                <img src={search} alt="Search Icon"/>
                <input type="text" name="" id="search-input" maxlength="800" placeholder="O que você quer ouvir?"/>
            </div>
            <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
            </div>
            </div>
        </nav>
    </div>
    )
};

export default Header;