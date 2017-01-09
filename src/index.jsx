import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';


const routes = (
  <Route path="/linkhere" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/linkhere/example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="linkhere/two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="/linkhere/*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
