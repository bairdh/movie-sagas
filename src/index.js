import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import oneMovieReducer from "./redux/reducers/oneMovieReducer";
import genreReducer from "./redux/reducers/genreReducer";
import movieReducer from "./redux/reducers/movieReducer";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga/rootSaga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieReducer,
        oneMovieReducer,
        genreReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;



ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
