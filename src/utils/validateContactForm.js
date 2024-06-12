// import React from 'react'

export const validateContactForm = (values) => {
    const errors={};
  
    if (!values.firstName) {
        errors.firstName='Required';
    }else if (values.firstName.length < 2) {
        errors.firstName= 'Must be at least 2 characters.';
    }else if (values.firstName.length>15) {
        errors.firstName= 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName='Required';
    }else if (values.lastName.length < 2) {
        errors.firstNlastNameame= 'Must be at least 2 characters.';
    }else if (values.lastName.length>15) {
        errors.lastName= 'Must be 15 characters or less';
    }

   const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }
    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    // return the errors object from our function,so that For any fields where the input value failed a validation test we have a message to an object named errors under the corresponding property name.
  return errors;
}