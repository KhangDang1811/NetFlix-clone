// const API_KEY ="9ae146a7a17361e4b7e8f03f00b68789";
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie??api_key=${API_KEY}&with_genres=48`,
    fetchComedyMovies: `/discover/movie??api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie??api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie??api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:  `/discover/movie??api_key=${API_KEY}&with_genres=99`,
}

export default requests;