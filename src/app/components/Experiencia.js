import React from 'react';

export default class Experiencia extends React.Component{
    render(){
        return(
        <div className="section scrollspy" id="experience">
            <div className="container">
                <h2 className="center-align">Experiencia</h2>
                <div className="carousel">
                    <a className="carousel-item"><img src="img/geologiayambiente.png"/></a>
                    <a className="carousel-item"><img src="img/sanatoriosantarosa.png"/></a>
                    <a className="carousel-item"><img src="img/geologiayambiente2.png"/></a>
                    <a className="carousel-item"><img src="img/sanatoriosantarosa2.png"/></a>
                </div>
            </div>
        </div>
        )
    }
}