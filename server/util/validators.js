module.exports.validateRegisterInput = (
    email
) => {
    const errors = {};
    if(name.trim() === '')
    {
        errors.name = 'Username is empty!'
    }
    if(email.trim() === '')
    {
        errors.email = 'Email is empty!'
    } else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid email address'
        }
    }
    if(password === '')
    {
        errors.password = 'Password is empty!'
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Password must match!'
    }
    if(phone === '')
    {
        errors.phone = 'Phone is empty!'
    }

    return{
        errors, valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = ( name, password ) => {
    const errors = {}
    if(name.trim() === '')
    {
        errors.name = 'Username is empty!'
    }
    if(password.trim() === '')
    {
        errors.password = 'Password is empty!'
    }

    return{
        errors, valid: Object.keys(errors).length < 1
    }
}