
import React, { useState, useEffect } from "react"
//router components
import { useParams, Link } from "react-router-dom"
//api url endpoint from context
import { API_ENDPOINT } from "../context"
//import fetch custom hook
import useFetch from "../useFetch"

const Result = () => {
  //id is what we are matching   
  const { id } = useParams()
  //get variables for the form, loading and is error msg from fetch custom hook
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  //if loading is true return a loading div
  if (isLoading) {
    return <div className="loading"></div>
  }
  //error.show is true then return error msg and a back button
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    )
  }
  //destructure the movie you got from data (from useFetch hook)
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  //return these movie details in a single-movie component
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default Result