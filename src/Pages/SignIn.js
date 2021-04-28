import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

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
            localStorage.setItem('token', res.data.token)
            console.log(res)
            history.push('/myprofile')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='auth_bg'>
            <div className='container' style={{height:'100vh'}}>
                <div className='row' style={{height:'100vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='authSvg' src={AuthImg} alt='signinsvg'/></div>
                    <div className='col-md-12 col-lg-6 my-auto login_form'>
                        <h2 className={classes.heading}>SIGN IN</h2>
                        <TextField onChange={e => setEmail(e.target.value)} className={classes.textfield} type="email" id="email" label="Email ..." variant="outlined" />
                        <TextField onChange={e => setPassword(e.target.value)} className={classes.textfield} type="password" id="password" label="Password ..." variant="outlined" />
                        <Button onClick={handleSubmit} className={classes.buttonStyle} variant='contained' color='primary' type="button">SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn