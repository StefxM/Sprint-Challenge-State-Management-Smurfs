import React, { useState } from 'react';

import { SubmitForm } from '../actions/index.js'; 
import { connect } from 'react-redux';


const SmurfForm = ({SubmitForm}) => {
    const [form, setForm] = useState({
        name: '',
        age: null,
        height: ''
    });

    const handleChanges = e => {
        setForm({
            [e.target.name]: e.target.value
            });
    };

    const onSubmit = (e) => {
        e.preventDefault()
        SubmitForm(form)
    }

    return (
       <div>
           <form onSubmit={onSubmit}>
            <label>Name</label>
            <input name='name' type='text'/>
            <label>Age</label>
            <input name='age' type='number'/>
            <label>Height</label>
            <input name='height' type='text'/>
           <button onClick={handleChanges}>Add smurf</button>
           </form>
       </div>
    )

}

const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps, {SubmitForm})(SmurfForm);