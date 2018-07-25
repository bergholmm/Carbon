import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { RepoList } from './features/RepoList';

const reducers = combineReducers({
    repos: RepoList.reducer,
});

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

export const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));
