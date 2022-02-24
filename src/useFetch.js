import { useState, useEffect } from "react"
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

//useFetch custom hook returns variables below for data error and isLoading when a url is passed
const useFetch =  (urlParams) => {
  //set loading of page (true by default in beginning)
  const [isLoading, setIsLoading] = useState(true)
  //what error should be shown if fetch fails
  const [error, setError] = useState({ show: false, msg: "" })
  //data thats been fetched
  const [data, setData] = useState(null)
  //fetch function asynchronous
  const fetchMovies = async (url) => {
    // Set loading to true when fetching data
    setIsLoading(true)
    //try to fetch data
    try {
      const response = await fetch(url)
      const data = await response.json()
      //if the response is valid then set data to the data or search data
      if (data.Response === "True") {
        setData(data.Search || data)
        //set the error to false with a blank message
        setError({ show: false, msg: "" })
      } else {
        //else set the msg to true with the error text
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      //if the fetch totally fails then display this error
      console.log(error)
    }
  }
  useEffect(() => {
    //when urParams changes auto fetch again
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch