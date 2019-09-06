import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import HideShowPassword from '../HideShowPassword'
import Input from '../Fields/input.js'
import Select from '../Fields/Select.js'
import Checkbox from '../Fields/Checkbox.js'

class MFstepOne extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                value : 2,
                newUser: {
                    student: '',
                    dateofbirth: '',
                    gender: '',
                    password: '',
                },
                genderOptions: ['male', 'female'],
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleStudent = this.handleStudent.bind(this);
           // this.handledateofbirth = this.handledateofbirth.bind(this);
            this.handleInput = this.handleInput.bind(this);
            this.nextBlock = this.nextBlock.bind(this);
    }
    componentDidMount(){
        document.getElementById("eye");
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({value: e.target.value});
    }
    handleStudent = e => {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                                        {
                                            ...prevState.newUser, student: value
                                        }
                                    }))
    }
    handleDob = value => {
        this.setState( prevState => ({ newUser : 
                                        {
                                            ...prevState.newUser, dateofbirth: value
                                        }
                                    }))
    }
    handleInput = e => {
         let value = e.target.value;
         let name = e.target.name;
         this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, [name]: value
                       }
            }
         }//, () => console.log(this.state.newUser)
         )
    }
    nextBlock = e => {
    	e.preventDefault();
    	const {dataCallback} = this.props;
    	dataCallback(this.state.newUser);
    }
    render(){
    	return (
            <Fragment>
                    <div className="container stepOne">
                        <Input type={'student'}
                           showTitle= {true}
                           title= {'Student'} 
                           name= {'student'}
                           value={this.state.newUser.student} 
                           placeholder = {'Enter your Name'}
                           handleChange = {this.handleStudent}
                           />
                        <div className="form-group row">
                           <label className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <ReactPhoneInput 
                                    defaultCountry={'in'} 
                                    placeholder="Enter phone dob"
                                    name="dateofbirth"
                                    value={ this.state.newUser.dateofbirth }
                                    onChange={this.handleDob}
                                />
                            </div>
                        </div>
                       <Select title={'Gender'}
                               name={'gender'}
                               options = {this.state.genderOptions} 
                               value = {this.state.newUser.gender}
                               placeholder = {'Select Gender'}
                               handleChange = {this.handleInput}
                        />
                        
                       <HideShowPassword 
                               title= {'Password'} 
                               name= {'password'}
                               value={this.state.newUser.password} 
                               placeholder = {'Enter your password'}
                               handleChange = {this.handleInput}
                               />
                        <Checkbox 
                            name = {'terms'}
                            onChange = {this.handleTerm}
                            options = {['Agree with terms and condition']}
                        />
                        <div className="form-group row fsubmit">
                        	<button type="submit" onClick={this.nextBlock} className="btn btn-primary">Register</button>
                    	</div>
                    </div>
            </Fragment>
                
    		)
    }
}

export default MFstepOne