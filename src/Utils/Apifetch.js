import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import ConvertData from "../Mapper/ConvertData"

/**
 * Send a request using fetch api
 * @param { String } url
 * @return { JSON }
 */

const Apifetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        // Load the fetch json into classes
        setData(ConvertData(resp, url))
      })
      // If there's an error with the data loading, redirects to the error page
      .catch((error) => {
        if (error) {
          ;<Navigate to="/error" />
        }
      })
  }, [url])

  // Returns the data from the classes
  return data
}

export default Apifetch
