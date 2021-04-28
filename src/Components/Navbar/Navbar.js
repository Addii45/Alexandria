import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {Button} from '@material-ui/core'
import './navbar.scss'
import axios from 'axios'


const NavbarComponent = () => {

  const onLogout = () => {
    localStorage.removeItem('token')
  }

  const onRemoveAccount = () => {
    axios.delete('users/me')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand className='nav_logo' href="#/home">ODIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <nav className="ml-auto">
          <NavLink activeClassName='secLinkActive' className='secLink' to="/myprofile">Profile</NavLink>
          <NavLink activeClassName='secLinkActive' className='secLink' to="/newRepo">New Repo</NavLink>
          <NavLink activeClassName='secLinkActive' className='secLink' to="/myRepos">My Repos</NavLink>
          <NavLink activeClassName='secLinkActive' className='secLink' to="/searchRepos">Search Repos</NavLink>
          <NavLink className='secLink' to="/signin"><Button onClick={onLogout}>Logout</Button></NavLink>
          <NavLink className='secLink' to="/signin"><Button onClick={onRemoveAccount}>Remove Account</Button></NavLink>
        </nav>
        </Navbar.Collapse>
    </Navbar>
  )
}


export default NavbarComponent