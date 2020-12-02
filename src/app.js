import React from 'react'; 
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
const { user } = useAuthListener();

  return (
  <Router>
    <Switch>

      <IsUserRedirect 
        user={user}  
        loggedInPath ={ROUTES.BROWSE} 
        exact
        path={ROUTES.SIGNIN}
        >
        <Signin />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
      </ProtectedRoute>

      <IsUserRedirect 
          user={user}  
          loggedInPath ={ROUTES.BROWSE} 
          exact
          path={ROUTES.SIGNUP}
          >
          <Signup />
      </IsUserRedirect>

      <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          exact path={ROUTES.HOME}
          >
          <Home />
      </IsUserRedirect>

    </Switch>
  </Router>
  );
}


