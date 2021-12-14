const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url: `movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title: 'Action',
        url: `discover/movie?api_key=${API_KEY}&with_genres=en-28`
    },
    fetchComedy:{
        title: 'Top Rated',
        url: `movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchHorror:{
        title: 'Horror',
        url: `discover/movie?api_key=${API_KEY}&language=en-US`
    },
    fetchRomance:{
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchWestern:{
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchTV:{
        title:'TV Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}