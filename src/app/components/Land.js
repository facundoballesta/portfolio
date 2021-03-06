import React from 'react';

//Landing Page
export default class Land extends React.Component {
    render() {
        return (
            <div className="content-wraper land center-align white-text">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h2 className="land-text left-align"><span className="light-green-text text-accent-4" >/mi-portfolio&#62;</span><span className="typed"></span></h2>
                    <a href="#about" className="btn waves-effect waves-light indigo"><i className="material-icons left">arrow_forward</i> Pasa a ver mi CV</a>
                </div>
            </div>
        )
    }
}