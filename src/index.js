import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIELIST', fetchMovieList);
    yield takeEvery('GET_MOVIE_INFO', getMovieInfo);
    yield takeEvery('UPDATE_MOVIE', updateMovie)

}

function* fetchMovieList(action){
    try{
        const res = yield axios.get('/movie');
        // console.log(res.data);
        yield put({type:'SET_MOVIES', payload: res.data})
    }catch(err){
        alert(`ERROR IN fetchMovieList!. see console`);
        console.log(err);
    }
}

function* getMovieInfo(action){
    try{
        const res = yield axios.get(`/movie/${action.payload}`);
        yield put({type: 'movie', payload: res.data})
    }catch(err){
        console.log(err);   
    }
}

function* updateMovie(action){
    try{
        const res = yield axios.put(`/movie/update`, action.payload);
        yield put({type:'GET_MOVIE_INFO', payload: action.payload.id});
    }catch(err){
        console.log(err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const initMovie = {
    id: 0,
    title: '',
    poster: '',
    description: '',
    genres: []
};
const oneMovie = (state = initMovie, action) => {
    switch (action.type){
        case 'movie':
            let genres = [];
            action.payload.map(genre => genres.push(genre.name))
            state = {
                id: action.payload[0].id,
                title: action.payload[0].title,
                poster: action.payload[0].poster,
                description: action.payload[0].description,
                genres: genres
            }            
            return state;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        oneMovie,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
