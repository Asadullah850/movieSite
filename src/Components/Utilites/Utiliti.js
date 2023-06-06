const addToLocalStorage = (id) =>{
    let movieId = {};
    const storeId = localStorage.getItem('movieId')
    if (storeId) {
        movieId = JSON.parse(storeId)
    }
    movieId[id] = 1;
    localStorage.setItem('movieId', JSON.stringify(movieId))
}
// get movie
 const getMovieId = ()=>{
    let movieId = {};
    const getId = localStorage.getItem('movieId')
    if ( getId ) {
        movieId = JSON.parse(getId)
    }
    return getId

 }
export {addToLocalStorage, getMovieId}