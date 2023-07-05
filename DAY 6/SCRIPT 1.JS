MOVIE.MD:

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG() {
    return movies.filter(movie => movie.rating === "PG");
   
  }
}
var movie = new Movie("Casino Royale", "Eon Productions", "PG-13");  
console.log(movie.title);   
console.log(movie.studio);  
console.log(movie.rating);