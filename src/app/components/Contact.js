import React from 'react';

export default class Contact extends React.Component{
    render(){
        return(
            <div className="section purple scrollspy" id="contact">
                <div className="container">
                    <div className="card z-depth-4">
                        <div className="container">
                            <div className="row">
                                <h2 className="center-align">Contacto</h2>
                                <div className="left-align contact-text"><span className="contact-text-typed"></span></div>
                                <form className="col m12">
                                    <div className="row">
                                        <div className="input-field col s12 m6">
                                        <i className="material-icons prefix">account_circle</i>
                                            <input name="name" type="text" className=""/>
                                            <label htmlFor="name">Nombre</label>
                                        </div>
                                        <div className="input-field col s12 m6">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input name="lastName" type="text" className=""/>
                                            <label htmlFor="lastName">Apellido</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mail</i>
                                            <input name="email" type="email" className=""/>
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">chat</i>
                                            <textarea name="email" type="email" className="materialize-textarea"></textarea>
                                            <label htmlFor="email">Mensaje</label>
                                        </div>
                                        <button className="btn waves-effect waves-light right" type="submit" name="action">
                                            Enviar
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}