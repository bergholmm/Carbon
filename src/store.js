import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';

import { repoListReducer } from './features/RepoList';

const reducers = combineReducers({
    repoListReducer,
});

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

export const store = createStore(
    reducers, /* preloadedState, */
    composeWithDevTools(applyMiddleware(axiosMiddleware(client)))
);
