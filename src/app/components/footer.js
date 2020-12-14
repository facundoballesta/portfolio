import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Fin</h5>
                <p className="grey-text text-lighten-4">Gracias por su tiempo. Espero le haya interesado mi perfil profesional</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Redes</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">E-mail</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Whatsapp</a></li>
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