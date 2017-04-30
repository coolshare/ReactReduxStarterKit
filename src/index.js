import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import defaultReducers from './components/TotalReducer'
import {logger} from './components/LoggerMiddleware'
import cs from './services/CommunicationService'
import TopContainer from './components/TopContainer'
import MainContainer from './components/MainPage/MainContainer'
import Patterns from './components/Patterns/PatternsContainer'
import Login from './components/Login'

import { Router, Route, IndexRoute, useRouterHistory, browserHistory  } from 'react-router'
import { createHashHistory } from 'history'
const history = useRouterHistory(createHashHistory)({ queryKey: false });

let store = createStore(defaultReducers, applyMiddleware(logger));
cs.init(store);

render(
  <Provider store={store}>
	  <Router history={browserHistory }>
		<Route path='/' component={TopContainer}>
			<IndexRoute component={Login} />
			<Route path='main' component={MainContainer} />	
			<Route path='Patterns' component={Patterns} />	
		</Route>		
	</Router>
  </Provider>,
  document.getElementById('root')
)

