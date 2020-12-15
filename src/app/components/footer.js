import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Fin</h5>
                <p className="grey-text text-lighten-4">Este es mi portfolio digital. Espero te guste y nos pongamos en contacto.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Redes</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/facundo-ballesteros-settimi/" target="__blank">Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="mailto:facundoballesteros01@hotmail.com" target="__blank">E-mail</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://wa.link/6trztz" target="__blank">Whatsapp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                © 2020 Facundo Ballesteros
            </div>
          </div>
        </footer>
        )
    }
}