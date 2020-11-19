import { createStore, compose, applyMiddleware } from 'redux';
import RootReducer from './reducers/index';

import thunkMiddleware from 'redux-thunk';
import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'

const intialState = {};

const middlewares = [loggerMiddleware, thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
const composedEnhancers = compose(...enhancers)

const store = createStore(RootReducer, intialState, composedEnhancers)

export default store;