import React from 'react';

export default class Experiencia extends React.Component {
    render() {
        return (
            <div className="section scrollspy" id="experience">
                <div className="container">
                    <h2>Experiencia</h2>
                    <div class="timeline">

                        <div class="timeline-event">
                            <div class="card timeline-content">
                                <div class="card-content teal white-text">
                                    <span class="card-title gradient white-text text-darken-4">
                                        2017<br />
                                    </span>
                                    <p>Aprendo de manera autodiacta HTML y CSS y empiezo a realizar trabajos freelance.</p>
                                </div>
                            </div>
                            <div class="timeline-badge indigo darken-3 white-text"></div>
                        </div>

                        <div class="timeline-event">
                            <div class="card timeline-content">
                                <div class="card-content teal white-text">
                                <span class="card-title gradient white-text text-darken-4">
                                        2018<br />
                                    </span>
                                    <p>Termino la Tecnicatura en Diseño y Animación Digital con promedio de 9.11.</p>
                                </div>
                            </div>
                            <div class="timeline-badge indigo darken-3 white-text"></div>
                        </div>


                        <div class="timeline-event">
                            <div class="card timeline-content">
                                <div class="card-content teal white-text">
                                    <span class="card-title gradient white-text text-darken-4">
                                        2019<br />
                                    </span>
                                    <p>Realiza cursos en Acamica, Plan111Mil <br />Comienzo a trabajar con PHP, Codeigniter y MySql como freelancer, aplicando estas tecnologia en proyectos para clientes del sector privado</p>
                                </div>
                            </div>
                            <div class="timeline-badge indigo darken-3 white-text"></div>
                        </div>


                        <div class="timeline-event">
                            <div class="card timeline-content">
                            <div class="card-content teal white-text">
                                    <span class="card-title gradient white-text text-darken-4">
                                        2020<br />
                                    </span>
                                    <p>Aprendo ReactJs, NodeJs, MongoDB y aplico estas tecnologias a mis proyectos. Participo en el programa CodoACodo</p>
                                </div>
                            </div>
                            <div class="timeline-badge indigo darken-3 white-text"></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}