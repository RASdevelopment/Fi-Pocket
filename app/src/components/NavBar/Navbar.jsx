import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <button>
                    <b className={useLocation().pathname === '/' ? 'icon-home UI-Icon1' : 'icon-home UI-Icon0'}></b>
                </button>
            </Link>
            <Link to="/map">
                <button>
                <b className={useLocation().pathname === '/map' ? 'icon-map UI-Icon1' : 'icon-map UI-Icon0'}></b>
                </button>
            </Link>
            <Link to="/directory">
                <button>
                <b className={useLocation().pathname === '/directory' ? 'icon-directory UI-Icon1' : 'icon-directory UI-Icon0'}></b>
                </button>
            </Link>
            <Link to="/archive">
                <button>
                <b className={useLocation().pathname === '/archive' ? 'icon-file UI-Icon1' : 'icon-file UI-Icon0'}></b>
                </button>
            </Link>
            <Link to="/SICEI">
                <button>
                <b className={useLocation().pathname === '/SICEI' ? 'icon-laptop UI-Icon1' : 'icon-laptop UI-Icon0'}></b>
                </button>
            </Link>
        </nav>
    )
}

export default Navbar;