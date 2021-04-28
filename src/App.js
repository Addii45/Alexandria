import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import {Profile, NewRepo, MyRepo, SearchRepo, SignUp, SignIn} from './Pages'
import {Footer, Navbar} from './Components'

function App() {
  return (
    <HashRouter>
        <Switch>        
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />   
          <>
          <Navbar/>
          <Route exact path='/myprofile' component={Profile} />
          <Route exact path='/newRepo' component={NewRepo} />
          <Route exact path='/myRepos' component={MyRepo}/>
          <Route exact path='/searchRepos' component={SearchRepo}/>
          <Footer/>
          </>
        </Switch>
    </HashRouter>
  )
}

export default App


// <Redirect from='/' to='/signup' exact/>