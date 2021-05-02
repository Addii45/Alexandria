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



const SignIn = () => {

    const classes = useStyles()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        const userData = { email, password }
        axios.post('users/login', userData)
        .then(res => {
            toast.success("User logged in successfully")
            localStorage.setItem('token', res.data.token)
            console.log(res)
            history.push('/myprofile')
        })
        .catch(err => {
            console.log(err)
            toast.error("User could not be logged in")
        })
    }




    
    const emailRef = createRef()
    const passwordRef = createRef()

    const handleEmailBlur = (e) => emailRef.current.validate(e.target.value)
    const handlePasswordBlur = (e) => passwordRef.current.validate(e.target.value)






    return (
        <div className='auth_bg'>
            <ToastContainer autoClose={3000} hideProgressBar={false} pauseOnHover />
            <div className='container' style={{height:'100vh'}}>
                <div className='row' style={{height:'100vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='authSvg' src={AuthImg} alt='signinsvg'/></div>
                    <div className='col-md-12 col-lg-6 my-auto login_form'>
                        <h2 className={classes.heading}>SIGN IN</h2>
                        <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
                            <TextValidator 
                                className={classes.textfield} type="email" id="email" label="Email ..." variant="outlined"
                                onChange={e => setEmail(e.target.value)}
                                ref={emailRef}
                                onBlur={handleEmailBlur}
                                validators={['required']} 
                                errorMessages={['username field is required']} />
                            <TextValidator 
                                className={classes.textfield} type="password" id="password" label="Password ..." variant="outlined"
                                onChange={e => setPassword(e.target.value)}
                                ref={passwordRef}
                                onBlur={handlePasswordBlur}
                                validators={['required']} 
                                errorMessages={['username field is required']}  />
                            <Button onClick={handleSubmit} className={classes.buttonStyle} variant='contained' color='primary' type="submit">SUBMIT</Button>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn