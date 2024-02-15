import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-slate-100 to-slate-400 text-black sticky p-2 top-0">
            <Link to="/" className="title font-mono text-3xl hover:blur-sm duration-300">
                Repertoire List
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>                
            </div>
            <ul className={menuOpen ? "open flex" : "flex-col"}>
                <li className="p-2">
                    <NavLink className="font-mono hover:blur-sm duration-300 block m-0 0.8" to="/pdfrender">.pdf Render</NavLink>
                </li>
                <li className="p-2">
                    <NavLink className="font-mono hover:blur-sm duration-300 block m-0 0.8" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar