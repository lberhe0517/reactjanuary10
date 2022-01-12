let apiKey = "",
    searchTerm = "spider man ";

let getMoviesBySearchTerm = async (apiKey, searchTerm) => {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
};
getMoviesBySearchTerm(apiKey, searchTerm);
Id = "tt3896198";
let getMoviesByDetailsById = async (apiKey, id) => {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
};
getMoviesByDetailsById(apiKey, Id)