import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values, [name]:value})
    console.log(`${name}:${value}`)  
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('pls fill out all forms')
    } 
  }

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  return (
    <Wrapper className='full-page'>
      <form action="" className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{ values.isMember ? 'login' : 'signup'}</h3>
        {/* name field */}
        {!values.isMember && (<FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>)}        
        {/* email field */}
        <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
        {/* password field */}
        <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
        <button className='btn btn-block' type='submit'>submit</button>
        { values.isMember ? (<p>Not a member yet?</p>) : (<p>Already a member?</p>)}
        <button type="button" onClick={toggleMember} className="member-btn">
          { values.isMember? "Sign Up" : "Log In"}
        </button>
      </form>
    </Wrapper>
  )
}
export default Register