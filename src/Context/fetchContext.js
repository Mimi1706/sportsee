import { createContext, useState } from "react"

export const fetchContext = createContext()

export const FetchProvider = ({ children }) => {
  const [fetch, setFetch] = useState("API")
  const toggleFetch = () => {
    setFetch(fetch === "API" ? "Mock" : "API")
  }

  return (
    <fetchContext.Provider value={{ fetch, toggleFetch }}>
      {children}
    </fetchContext.Provider>
  )
}
