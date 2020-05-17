// Import saga middleware
import { takeEvery, put } from 'redux-saga/effects';

import axios from 'axios';

import fetchMovieList from './fetchMovieListSaga';
import getMovieInfo from './getMovieInfoSaga';
import updateMovie from './updateMovieSaga';

// Create the rootSaga generator function
 export default function* rootSaga() {
    yield takeEvery('FETCH_MOVIELIST', fetchMovieList);
    yield takeEvery('GET_MOVIE_INFO', getMovieInfo);
    yield takeEvery('UPDATE_MOVIE', updateMovie)
}


