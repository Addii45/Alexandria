import './pages.scss'
import {InputBox} from '../Common'
import {Button} from '@material-ui/core'
import AuthImg from '../Images/authSvg.svg'


const SignIn = () => {

    return (
        <div className='auth_bg'>
            <div className='container' style={{height:'85vh'}}>
                <div className='row' style={{height:'85vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='authSvg' src={AuthImg} alt='signupsvg'/></div>
                    <div className='col-md-12 col-lg-6 my-auto login_form'>
                        <h2 className="head">LOGIN</h2><br/>
                        <InputBox label='username' labelText='USERNAME' type='text' />
                        <InputBox label='password' labelText='PASSWORD' type='password' />
                        <br/><Button className='authBtn' variant='contained' color='primary' type="button">SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn