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



const SignUp = () => {

    const classes = useStyles()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = () => {
        console.log(username, email, password, desc)
        const userData = { username, email, password, desc }
        axios.post('users', userData)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res)
            history.push('/signin')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='auth_bg'>
            <div className='container' style={{height:'100vh'}}>
                <div className='row' style={{height:'100vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='authSvg' src={AuthImg} alt='signupsvg'/></div>
                    <div className='col-md-12 col-lg-6 my-auto login_form'>
                        <h2 className={classes.heading}>SIGN UP</h2>
                        <TextField onChange={e => setUsername(e.target.value)} className={classes.textfield} id="username" label="Username ..." variant="outlined" />
                        <TextField onChange={e => setEmail(e.target.value)} className={classes.textfield} type="email" id="email" label="Email ..." variant="outlined" />
                        <TextField onChange={e => setPassword(e.target.value)} className={classes.textfield} type="password" id="password" label="Password ..." variant="outlined" />
                        <TextField onChange={e => setDesc(e.target.value)} className={classes.textfield} multiline id="desc" label="Tell something about yourself ..." variant="outlined" />
                        <Button onClick={handleSubmit} className={classes.buttonStyle} variant='contained' color='primary' type="button">SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp