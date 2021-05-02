import React, { useState, createRef } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

// Styling
import {Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AuthImg from '../Images/authSvg.svg'
import './pages.scss'




const useStyles = makeStyles({
    textfield: {
        width:'90%',
        marginBottom:10
    },
    heading: {
        marginBottom:20
    },
    buttonStyle: {
        marginTop:20
    }
})




const SignUp = () => {

    const classes = useStyles()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [college, setCollege] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = () => {
        console.log(username, email, password, college, desc)
        const userData = { username, email, password, collegeName:college, desc }
        axios.post('users', userData)
        .then(res => {
            console.log(res)
            toast.success("User registered successfully")
            history.push('/signin')
        })
        .catch(err => {
            console.log(err)
            toast.error("User could not be registered")
        })
    }



    
    const usernameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const collegeRef = createRef()
    const descRef = createRef()

    const handleUsernameBlur = (e) => usernameRef.current.validate(e.target.value)
    const handleEmailBlur = (e) => emailRef.current.validate(e.target.value)
    const handlePasswordBlur = (e) => passwordRef.current.validate(e.target.value)
    const handleCollegeBlur = (e) => collegeRef.current.validate(e.target.value)
    const handleDescBlur = (e) => descRef.current.validate(e.target.value)



    return (
        <div className='auth_bg'>
        <ToastContainer autoClose={3000} hideProgressBar={false} pauseOnHover />
            <div className='container' style={{height:'100vh'}}>
                <div className='row' style={{height:'100vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='authSvg' src={AuthImg} alt='signupsvg'/></div>
                    <div className='col-md-12 col-lg-6 my-auto login_form'>
                        <h2 className={classes.heading}>SIGN UP</h2>
                        <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
                            <TextValidator 
                                id="username" label="Username ..." variant="outlined" className={classes.textfield}
                                onChange={e => setUsername(e.target.value)} 
                                ref={usernameRef}
                                onBlur={handleUsernameBlur}
                                validators={['required']} 
                                errorMessages={['username field is required']} />
                            <TextValidator 
                                id="email" type="email" label="Email ..." variant="outlined" className={classes.textfield}                                
                                onChange={e => setEmail(e.target.value)} 
                                ref={emailRef}
                                onBlur={handleEmailBlur}
                                validators={['required', 'isEmail']} 
                                errorMessages={['email field is required', 'email is not valid']} />
                            <TextValidator 
                                id="password" type="password" label="Password ..." variant="outlined" className={classes.textfield}
                                onChange={e => setPassword(e.target.value)} 
                                ref={passwordRef}
                                onBlur={handlePasswordBlur}
                                validators={['required']} 
                                errorMessages={['password field is required']} />
                            <TextValidator 
                                id="college" label="College Name ..." variant="outlined" className={classes.textfield}
                                onChange={e => setCollege(e.target.value)} 
                                ref={collegeRef}
                                onBlur={handleCollegeBlur}
                                validators={['required']} 
                                errorMessages={['college name field is required']} />
                            <TextValidator 
                                multiline id="desc" label="Tell something about yourself ..." variant="outlined" className={classes.textfield}
                                onChange={e => setDesc(e.target.value)} 
                                ref={descRef}
                                onBlur={handleDescBlur}
                                validators={['required']} 
                                errorMessages={['description field is required']} />
                            <Button onClick={handleSubmit} className={classes.buttonStyle} variant='contained' color='primary' type="submit">SUBMIT</Button>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp