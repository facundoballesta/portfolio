import React from 'react';

//Float Contact button
export default class FloatContact extends React.Component{
    render(){
        return(
            <div className="fixed-action-btn section">
                <a className="btn-floating btn-large red pulse">
                    <i className="large material-icons">chat</i>
                </a>
                <ul>
                    <li><a className="btn-floating blue" href="#contact"><i className="material-icons">email</i></a></li>
                    <li><a className="btn-floating green" href="https://wa.link/6trztz" target="__blank"><i className="material-icons">contact_phone</i></a></li>
                </ul>
            </div>
        )
    }
}