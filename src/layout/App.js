import './App.css';
import AppContainer from './app-container/appContainer';
import LoginComponent from './login-component/loginComponent';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" component={LoginComponent} />
           <Route exact path="/app" component={AppContainer} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
