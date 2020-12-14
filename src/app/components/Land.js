import React from 'react';

export default class Land extends React.Component{
    render(){
        return(
            <div className="content-wraper land center-align white-text parallax-container">
                <div className="parallax">
                    <img src="img/bg-01.png"/>
                </div>
                <div className="container">
                    <h2 className="land-text left-align"><span className="light-green-text text-accent-4">/mi-portfolio&#62;</span><span className="typed"></span></h2>
                <a href="#about" className="btn waves-effect waves-light indigo"><i className="material-icons left">arrow_forward</i> Pasa a ver mi CV</a>
                </div>
            </div>
        )
    }
}