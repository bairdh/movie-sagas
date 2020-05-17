import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* getMovieInfo(action) {
    try {
        const res = yield axios.get(`/movie/${action.payload}`);
        yield put({ type: 'MOVIE', payload: res.data })
    } catch (err) {
        console.log(err);
    }
}