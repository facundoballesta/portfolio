import React from 'react';

export default class About extends React.Component{
    render(){
        return(
            <div className="indigo  darken-2 section white-text">
                <div className="container scrollspy" id="about">
                    <h2 className="center-align">Acerca de mi</h2>
                    <div className="row">
                        <div className="col m8">
                            <h3>Soy Facundo Ballesteros...</h3>
                            <p>
                                Soy un Fullstack Web Dev Jr. Mayormente autodidacta.

                            </p>
                        </div>
                        <div className="col m4 center-align">
                            <img src="img/avatar.jpg" alt="" className="circle responsive-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}