import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from './../../../ui/formFields'
import { validate } from './../../../ui/misc';

class Enroll extends Component {

    state ={
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                validationMessage:''
            }
        }
    }

    updateForm=(element)=>{
        const newFormData={...this.state.formdata}
        const newElement={...newFormData[element.id]}

        newElement.value=element.event.target.value;

        let validData = validate(newElement)
        
        newElement.value=validData[0];
        newElement.validationMessage=validData[1];

        newFormData[element.id] = newElement;

        this.setState(
           {formdata:newFormData}
        )
    }

    submitForm(){

    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=>this.submitForm(event)}>
                        <div className="enroll_title">Enter your email</div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}
                            />
                        </div>

                    </form>
                </div>        
            </Fade>
        );
    }
}

export default Enroll;