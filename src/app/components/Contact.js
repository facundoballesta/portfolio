import React from 'react';

export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
                nombre: "",
                apellido: "",
                email: "",
                mensaje: "",
        }
        this.onChange = this.onChange.bind(this);
        this.enviarFormulario = this.enviarFormulario.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    enviarFormulario(e){
        if(this.state.nombre === "" || this.state.apellido === "" || this.state.email === "" || this.state.mensaje === ""){
            M.toast({html: 'Complete todos los campos!'});
        }else{
            console.log(this.state);
            fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/jason',
                    'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'Mail enviado!'});
                this.setState({
                    nombre: "",
                    apellido: "",
                    email: "",
                    mensaje: ""
                })
            })
            .catch(err=>{
                console.log(err)});
        }

        e.preventDefault();
    }
    render(){            
        return(
            <div className="section purple scrollspy" id="contact">
                <div className="container">
                    <div className="card z-depth-4">
                        <div className="container">
                            <div className="row">
                                <h2 className="center-align">Contacto</h2>
                                <div className="left-align contact-text"><span className="contact-text-typed"></span></div>
                                <form className="col m12" onSubmit={this.enviarFormulario}>
                                    <div className="row">
                                        <div className="input-field col s12 m6">
                                        <i className="material-icons prefix">account_circle</i>
                                            <input name="nombre" type="text" onChange={this.onChange} value={this.state.nombre}/>
                                            <label htmlFor="nombre">Nombre</label>
                                        </div>
                                        <div className="input-field col s12 m6">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input name="apellido" type="text" className="" onChange={this.onChange} value={this.state.apellido}/>
                                            <label htmlFor="apellido">Apellido</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mail</i>
                                            <input name="email" type="email" className="" onChange={this.onChange} value={this.state.email}/>
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">chat</i>
                                            <textarea name="mensaje" className="materialize-textarea" onChange={this.onChange} value={this.state.mensaje}></textarea>
                                            <label htmlFor="mensaje">Mensaje</label>
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