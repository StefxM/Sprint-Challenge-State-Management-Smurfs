import React, { useState } from 'react';

import { SubmitForm } from '../actions/index.js'; 
import { connect } from 'react-redux';


const SmurfForm = props => {
    const [form, setForm] = useState({
        name: '',
        age: null,
        height: ''
    });
    
    const handleChanges = e => {
        e.preventDefault()
        setForm({ ...form,
            [e.target.name]: e.target.value
            });
    };

    const onSubmit = (e) => {
        console.log(form)
        e.preventDefault()
        props.SubmitForm(form)
    }
  
    return (
       <div>
           <form onSubmit={onSubmit}>
            <label>Name</label>
            <input name='name' type='text' value={props.name} onChange={handleChanges}/>
            <label>Age</label>
            <input name='age' type='number' value={props.age} onChange={handleChanges}/>
            <label>Height</label>
            <input name='height' type='text' value={props.height} onChange={handleChanges}/>
           <button>Add smurf</button>
           </form>
       </div>
    )

}

const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps, {SubmitForm})(SmurfForm);