import React from 'react';

//About
export default class About extends React.Component{
    constructor(){
        super();
        this.state = {
            age = 21
        }
    }
    calculateAge(birthday) {
        var birthday_arr = birthday.split("/");
        var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
        var ageDifMs = Date.now() - birthday_date.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    componentDidMount(){
        const age = this.calculateAge("22/05/1998");
        this.setState({
            age : age
        })
    }
    render(){
        return(
            <div className="indigo  darken-2 section white-text">
                <div className="container scrollspy" id="about">
                    <h2 className="center-align">Acerca de mi</h2>
                    <div className="row">
                        <div className="col m8 personal">
                            <h3>Soy Facundo Ballesteros...</h3>
                            <p>
                                Tengo <strong>{this.state.age}</strong> años, vivo en Santa Rosa; La Pampa; Argentina y soy un <strong>Fullstack Web Dev Jr.</strong> Mayormente autodidacta. Me gusta aprender y mantenerme activo.
                                <br/>Me divierto trabajando con <strong>NodeJs</strong>, <strong>React</strong>, <strong>Bootstrap</strong>, <strong>Materialize</strong>, <strong>MongoDB</strong> y <strong>MySql</strong>.

                            </p>
                        </div>
                        <div className="col m4 center-align personal">
                            <img src="img/avatar.jpg" alt="" className="circle responsive-img"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 push-m4 universidad">
                            <h3>Estudios universitarios</h3>
                            <p>
                                Realicé una <strong>Tecnicatura en Diseño y Animación Digital</strong> en la universidad <strong>Siglo 21</strong>. <br/>
                                Finalicé la carrera con un promedio de 9,11 en el año 2018.
                            </p>
                        </div>
                        <div className="col m4 pull-m8 center-align universidad">
                            <img src="img/s21.jpg" alt="" className="circle responsive-img"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 cursos">
                            <h3>Cursos</h3>
                            <p>
                                Luego de la universidad, continue capacitandome. <br/>
                                Realicé varios cursos en Acamica (Desarrollo Web Full Stack), participé en el Plan111Mil y CodoACodo.

                            </p>
                        </div>
                        <div className="col m4 center-align cursos">
                            <img src="img/acamica.png" alt="" className="circle responsive-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}