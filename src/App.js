import './App.css';
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Demo } from 'components/landing';
const LoginPage = React.lazy(() => import("./pages/Login/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading App</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Demo}/>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
