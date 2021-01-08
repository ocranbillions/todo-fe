import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import Todo from './components/Todo/Todo'

function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/todos" component={Todo}/>
          
          <Route render={() => {
            return (<div>Page not found</div>)
          }}/>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
