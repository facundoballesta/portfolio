import React from 'react';

export default class Repos extends React.Component{
    constructor(){
        super();
        this.state={
            repos: []
        }
    }
    componentDidMount(){
        fetch('https://api.github.com/users/facundoballesta/repos')
        .then(res => res.json())
        .then(data => {
            
            const newData = data.sort(function(a,b){
                if (a.node_id > b.node_id) {
                return -1;
                }
                if (a.node_id < b.node_id) {
                return 1;
                }
                // a must be equal to b
                return 0;
            });
            console.log(newData);
            this.setState({
                repos: data
            });
        })
    }
    render(){
        return(
        <div className="section blue-grey darken-4 white-text scrollspy" id="proyects">
            <div className="container">
                <h2>Proyectos</h2>
                <p>
                    Aqui podras ver todos mis proyectos subidos.<br/>
                    Por cierto, esta sección consume datos desde la API de GitHub.
                </p>
                <div className="row">
                    {this.state.repos.map(repo =>{
                        return(
                            <div className="col s12 m4" key={repo.id}>
                              <div className="card">
                                <div className="card-image">
                                  <img src={repo.owner.avatar_url}/>
                                  <span className="card-title">{repo.name}</span>
                                </div>
                                <div className="card-content black-text">
                                  <p>{repo.description}</p>
                                </div>
                                <div className="card-action">
                                  <a target="__blank" className="btn grey darken-4 waves-effect waves-light" href={repo.html_url}><i className="material-icons left">chevron_right</i> Ver en GitHub</a>
                                </div>
                              </div>
                            </div>     
                        )
                    })}
                </div>             
            </div>            
        </div>
        )
    }
}