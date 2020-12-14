import React from 'react';

//Components
import Nav from './components/Nav';
import Land from './components/Land';
import About from './components/About';
import Repos from './components/Repos';
import Contact from './components/Contact'
import Footer from './components/footer'
import FloatContact from './components/floatContact'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Land/>
                <About/>
                <Repos/>
                <Contact/>
                <Footer/>
                <FloatContact/>
            </div>
        )
    }
}