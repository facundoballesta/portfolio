import React from 'react';

export default class ExperienciaIter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="timeline-event">
                <div className="card timeline-content">
                    <div className="card-content teal white-text">
                        <span className="card-title gradient white-text text-darken-4">
                            {this.props.anio}<br />
                        </span>
                        <p>{this.props.texto}</p>
                    </div>
                </div>
                <div className="timeline-badge indigo darken-3 white-text"></div>
            </div>
        )
    }
}