import React from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.css';

const Nav = () => {
    return (

        <nav className="nav-navbar navbar-default col-xs-12">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span className="sr-only">Toggle navigation</span>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <ul className="nav nav-pills">
                    <a className="navbar-brand" href="/atendimento">Atendimento </a>
                    <a className="navbar-brand" href="/cozinha">Cozinha </a>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;