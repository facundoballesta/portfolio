import React from 'react';

export default class Repos extends React.Component{
    constructor(){
        super();
        this.state={
            repos: [],
            reposLoad: "Loading"
        }
    }
    //When component load, fetch data from GitHub and set it on State
    componentDidMount(){
        fetch('https://api.github.com/users/facundoballesta/repos')
        .then(res => res.json())
        .then(data => {
            //Sorting data from GitHub
            const newData = data.sort(function(a,b){
                if (a.node_id > b.node_id) {
                return -1;
                }
                if (a.node_id < b.node_id) {
                return 1;
                }
                return 0;
            });
            this.setState({
                repos: data.slice(0,3)
            });
            //When data fetching finish and load on state, set a State "reposLoad" on "Done" to hide spinner.
            this.setState({
                reposLoad:"Done"
            })
        }).catch(err =>{
            this.setState({
                reposLoad:"Error"
            })
        })
    }
    render(){
        
        return(
        <div className="section blue-grey darken-4 white-text scrollspy" id="proyects">
            <div className="container">
                <h2>Proyectos</h2>
                <p>
                    Aqui podras ver todos mis ultimos 3 proyectos subidos.<br/>
                    Por cierto, esta sección consume datos desde la API de GitHub. <br/>
                </p>
                <a className="btn black waves-effect waves-light" href="https://github.com/facundoballesta" target="__blank">Ver Todos</a>
                <div className="row repo">
                    {this.state.reposLoad=="Done" &&
                    this.state.repos.map(repo =>{
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
                    {this.state.reposLoad=="Loading" &&
                     <div className="progress cyan">
                        <div className="indeterminate blue"></div>
                    </div>
                    }
                    {this.state.reposLoad=="Error" &&
                    <div>
                        <div className="card red">
                            <div className="card-content">
                            <span className="card-title">Algo salió mal :(</span>
                            <div className="card-action">
                                <p>Pero puedes ver mi proyectos aquí:</p>
                                <a className="btn black waves-effect waves-light" href="https://github.com/facundoballesta" target="__blank">Github</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                </div> 
                       
            </div>            
        </div>
        )
    }
}