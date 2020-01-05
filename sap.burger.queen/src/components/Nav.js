import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <nav>
            <ul>
                <li>
                    <Link to="/atendimento">Atendimento</Link>
                </li>
                <li>
                    <Link to="/cozinha">Cozinha</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Nav;