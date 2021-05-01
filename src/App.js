import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import {Profile, NewRepo, MyRepo, SearchRepo, FinalRepo, SignUp, SignIn} from './Pages'
import {Footer, Navbar} from './Components'

function App() {
  return (
    <HashRouter>
        <Switch>  
          <Redirect from='/' to='/signup' exact/>      
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />   
          <>
          <Navbar/>
          <Route exact path='/myprofile' component={Profile} />
          <Route exact path='/newRepo' component={NewRepo} />
          <Route exact path='/myRepos' component={MyRepo}/>
          <Route exact path='/searchRepos' component={SearchRepo}/>
          <Route exact path='/finalRepo/:repoId' component={FinalRepo}/>
          <Footer/>
          </>
        </Switch>
    </HashRouter>
  )
}

export default App


// <Redirect from='/' to='/signup' exact/>