import React from 'react';
import Movie from './compoents/Movie';
import MovieForm from './compoents/MovieForm';
import Navbar from './compoents/Navbar';
import Users from './compoents/pages/Users';
import Home from './compoents/pages/Home';
import Movies from './compoents/pages/Movies';
import routes from './routes'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
return (
  <>
  <Router>
    <div className="App">
      <Navbar />
      <div className="container">
      <Switch>
        {routes.map(route => {
          return(
            <Route
            key={route.path}
            path={route.path}
            exact>
              <route.component />
            </Route>
          )
        })}
      </Switch>
      </div>
    </div>
  </Router>
  </>
  );
}




export default App ;
