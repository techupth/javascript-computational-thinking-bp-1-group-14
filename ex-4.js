const movies = [
  {
    title: "The Shawshank Redemption",
    releaseDate: "1994-01-14",
    genre: "Drama",
  },
  { title: "The Godfather", releaseDate: "1972-03-24", genre: "Crime" },
  {
    title: "The Godfather: Part II",
    releaseDate: "1974-12-20",
    genre: "Crime",
  },
  { title: "The Dark Knight", releaseDate: "2008-07-16", genre: "Action" },
  { title: "Pulp Fiction", releaseDate: "1994-01-14", genre: "Crime" },
];
function findMoviesByYear(movies, year) {
  // Start coding here
    const modi = [];
    let newTitle = [];
    for (let i=0; i < movies.length; i++) {
      let date  = new Date(movies[i].releaseDate).getFullYear();
      modi.push(date)
      movies[i].releaseDate = date+""
     //if(movies[i.releaseDate] === year)   {
      if(movies[i].releaseDate.includes(year)){
       newTitle.push("title : " + movies[i].title)
      newTitle.push("releaseDate : " +movies[i].releaseDate)
      newTitle.push("Genre : "+movies[i].genre)
        }
    }
   return newTitle
}
const Exercise4 = findMoviesByYear(movies, "1994");
console.log(Exercise4)
/* Output:
[
  { title: "The Shawshank Redemption", releaseDate: "1994-10-14", genre: "Drama" },
  { title: "Pulp Fiction", releaseDate: "1994-10-14", genre: "Crime" }
]
*/
