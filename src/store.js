import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/root-reducer';
import logger from 'redux-logger';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));


export default store;