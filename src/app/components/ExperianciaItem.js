import React from 'react';

export default class ExperienciaIter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div class="timeline-event">
                <div class="card timeline-content">
                    <div class="card-content teal white-text">
                        <span class="card-title gradient white-text text-darken-4">
                            {this.props.anio}<br />
                        </span>
                        <p>{this.props.texto}</p>
                    </div>
                </div>
                <div class="timeline-badge indigo darken-3 white-text"></div>
            </div>
        )
    }
}