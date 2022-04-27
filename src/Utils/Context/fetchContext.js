import { createContext, useState } from "react"

export const fetchContext = createContext()

/**
 * Function that allows the switch between Mock and API
 * @param {Object} children
 *
 */

export const FetchProvider = ({ children }) => {
  // Data is by default fetched from the API
  const [fetch, setFetch] = useState("API")
  const toggleFetch = () => {
    // Switch the button between API and Mock
    setFetch(fetch === "API" ? "Mock" : "API")
  }

  return (
    // Encompass the whole App to be relatable from the HomePage
    <fetchContext.Provider value={{ fetch, toggleFetch }}>
      {children}
    </fetchContext.Provider>
  )
}
