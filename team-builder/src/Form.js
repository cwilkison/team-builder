import React, { useState } from 'react';


function Form(props){

return(
<form onSubmit={props.onFormSubmit}>
      <lable>First Name
      <input
        onChange={props.onInputChange}
        value={props.formValues.fname}
        name='fname'
        type='text'
      />
      </lable><br />
      <lable>Email
      <input
        onChange={props.onInputChange}
        value={props.formValues.email}
        name='email'
        type='text'
      />
      </lable><br />
      <lable>Role
      <input
        onChange={props.onInputChange}
        value={props.formValues.role}
        name='role'
        type='text'
        />
      </lable>
      <input type='submit'/>
    </form>
)
}

export default Form;
