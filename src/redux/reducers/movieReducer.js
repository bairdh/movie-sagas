import fetchMovieList from "../../saga/fetchMovieListSaga";

const SET_MOVIES = `movie-saga/movies/setMovies`;

const initialState = [];

// Used to store movies returned from the server
 export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export const set_movies = () => ({
    type: SET_MOVIES
});