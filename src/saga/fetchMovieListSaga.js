import { put } from 'redux-saga/effects';
import axios from 'axios';
import movieReducer from '../redux/reducers/movieReducer';

export default function* fetchMovieList(action) {
    try {
        const res = yield axios.get('/movie');
        // console.log(res.data);
        yield put({ type: movieReducer.SET_MOVIES, payload: res.data })
    } catch (err) {
        alert(`ERROR IN fetchMovieList!. see console`);
        console.log(err);
    }
}
