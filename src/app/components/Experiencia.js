import React from 'react';
import ExperienciaItem from './ExperianciaItem';

export default class Experiencia extends React.Component {
    render() {
        return (
            <div className="section scrollspy" id="experience">
                <div className="container">
                    <h2>Experiencia</h2>
                    <div class="timeline">
                        <ExperienciaItem anio="2017" texto="Aprendo de manera autodiacta HTML y CSS y empiezo a realizar trabajos freelance."/>
                        <ExperienciaItem anio="2018" texto="Termino la Tecnicatura en Diseño y Animación Digital con promedio de 9.11."/>
                        <ExperienciaItem anio="2019" texto="Realiza cursos en Acamica, Plan111Mil <br />Comienzo a trabajar con PHP, Codeigniter y MySql como freelancer, aplicando estas tecnologia en proyectos para clientes del sector privado"/>
                        <ExperienciaItem anio="2020" texto="Aprendo ReactJs, NodeJs, MongoDB y aplico estas tecnologias a mis proyectos. Participo en el programa CodoACodo"/>
                    </div>
                </div>
            </div>
        )
    }
}