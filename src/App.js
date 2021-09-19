import './App.css';
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const LoginPage = React.lazy(() => import("./pages/Login/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading App</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
