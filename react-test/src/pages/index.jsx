import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import Login from './Login';
import Contacto from './Contacto';

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;
