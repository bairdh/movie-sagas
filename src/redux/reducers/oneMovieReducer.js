import updateMovie from "../../saga/updateMovieSaga";
import getMovieInfo from "../../saga/getMovieInfoSaga";


const MOVIE = `movie-saga/oneMovie/movie`;

const initMovie = {
    id: 0,
    title: '',
    poster: '',
    description: '',
    genres: []
};
 export default (state = initMovie, action) => {
    switch (action.type) {
        case MOVIE:
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

export const movie = () => ({
    type: MOVIE
});
