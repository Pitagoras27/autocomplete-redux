import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
// import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import Results from './components/results';
// import Details from './components/details';
import Main from './main';

// const App = (
//   <Provider store={store}>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/results' component={Results}></Route>
//         <Route exact path='/details/:idItem' component={Details}></Route>
//         <Redirect from='/' to='/results' />
//       </Switch>
//     </BrowserRouter>
//   </Provider>
// );

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
