import React from "react"
//importing our global context hook
import { useGlobalContext } from "../context"
//search form component
const SearchForm = () => {
  //getting the form state value,setState func and error from context
  const { query, setQuery, error } = useGlobalContext()
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text "
        className="form-input"
        //class .search-form__input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {
        //if there is an error then show it with this element
      }
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
}

export default SearchForm
