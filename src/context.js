import React, { useContext, useState, useEffect } from "react"
import useFetch from "./useFetch"
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman")
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)
  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
