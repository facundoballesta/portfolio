import React from 'react';

export default class Nav extends React.Component{
    render(){
        return(
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper indigo darken-4 z-depth-3">
                        <div className="container">
                            <a href="/" className="brand-logo">Facundo</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#root">Inicio</a></li>
                                <li><a href="#about">Acerca de mi</a></li>
                                <li><a href="#proyects">Proyectos</a></li>
                                <li><a href="#contact">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#root">Inicio</a></li>
                    <li><a href="#about">Acerca de mi</a></li>
                    <li><a href="#proyects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            
        </div>
        
        )
    }
}