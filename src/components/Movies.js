import React from "react"
import { useGlobalContext } from "../context"
import { Link } from "react-router-dom"
//img to be shown when no poster is available
const url ="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

const Movies = () => {
  //get movies data and isLoading state from context
  const { movies, isLoading } = useGlobalContext()
  //isLoading is true return loading div
  if (isLoading) {
    return <div className="loading"></div>
  }
  //else return movie cards based on the the movie data
  return (
    <section className="movies">
    {
        //map through movies and destructure the properties out then return a card for each with a link to more info (movies/param)
    }
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
