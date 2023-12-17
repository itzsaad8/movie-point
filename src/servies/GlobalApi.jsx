import axios from "axios";




const moviebaseurl = "https://api.themoviedb.org/3"
const api_key = "0bcf7c94f220bfc0527f195638a00064"
const moviebygenerebaseurl = "https://api.themoviedb.org/3/discover/movie?api_key=0bcf7c94f220bfc0527f195638a00064"
// https://api.themoviedb.org/3/discover/movie?api_key=0bcf7c94f220bfc0527f195638a00064&with_genres=28
const gettrendingvedios= axios.get(moviebaseurl +"/discover/movie?api_key=" + api_key)
const getmoviebygenreid = async(id)=>{
   return await  axios.get(moviebygenerebaseurl+"&with_genres="+id)
   
} 
 

// https://api.themoviedb.org/3/discover/movie?api_key=0bcf7c94f220bfc0527f195638a00064

// const gettrendingvedios = axios.get(moviebaseurl + "/search/movie?query=Batman&callback=test?api_key="+ api_key)
// const gettrendingvedios = axios.get("https://api.themoviedb.org/3/movie/157336?api_key=0bcf7c94f220bfc0527f195638a00064")

// https://api.themoviebd.org/3/trending/all/day?api_key=0bcf7c94f220bfc0527f195638a00064

// https://api.themoviedb.org/3/search/movie?query=Batman&callback=test?api_key=0bcf7c94f220bfc0527f195638a00064

// https://api.themoviedb.org/3/trending/all/day??api_key=0bcf7c94f220bfc0527f195638a00064

export default {
    gettrendingvedios,
    getmoviebygenreid
}















// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmNmN2M5NGYyMjBiZmMwNTI3ZjE5NTYzOGEwMDA2NCIsInN1YiI6IjY1N2RjMDc2NWM1Y2M4MDZiODk2NDAyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZC2HxuhsBwSrocCPHgB60VtMbDbvy3CzZJR_BzNoQdY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));


















