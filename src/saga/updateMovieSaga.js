import { put } from 'redux-saga/effects';
import axios from 'axios';

export default function* updateMovie(action) {
    try {
        const res = yield axios.put(`/movie/update`, action.payload);
        yield put({ type: 'GET_MOVIE_INFO', payload: action.payload.id });
    } catch (err) {
        console.log(err);
    }
}
