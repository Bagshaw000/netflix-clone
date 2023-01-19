const API_KEY = '3b0f6e24f674a9f64cef916610c46ce2';

const requests ={
    fetchTrending:`/trending/all/day?api_key=${API_KEY}` ,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}` ,
}

export default requests;