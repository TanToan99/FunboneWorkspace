import './App.css';
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const LoginPage = React.lazy(() => import("./pages/Login"));
const CommonContainer = React.lazy(() => import("./components/common/CommonContainer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading App</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/register" component={LoginPage} />
            <Route component={CommonContainer}/>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
