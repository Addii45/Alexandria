import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css'
import {Profile, NewRepo, MyRepo, SearchRepo} from './Pages'
import {Footer, Navbar} from './Components'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Redirect from='/' to='/myprofile' exact/>
          <Route exact path='/myprofile' component={Profile} />
          <Route exact path='/newRepo' component={NewRepo} />
          <Route exact path='/myRepos' component={MyRepo}/>
          <Route exact path='/searchRepos' component={SearchRepo}/>
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
