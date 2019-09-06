import * as React from 'react'
//import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Gap from '../../components/smallcomponents/Gap'
import { Fragment } from 'react';
import Multiform from '../../modules/Multiform/Multiform';

class Register extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                isLoading : true,
                posts : [],
                error : null
            };
    }
    render(){
        return (
            <Fragment>
                <Header />
                <Gap height="20" />
                <div className="container">
                    <div className="row pageHeader">
                        <h1>Student Details Form</h1>
                        <p>You have to fill all the details.</p>
                    </div>
                </div>
                <Multiform />
                <Gap height="20" />
                <Footer />
            </Fragment>
            )
    }
}

export default Register