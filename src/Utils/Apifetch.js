import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import ConvertData from "../Mapper/ConvertData"

/**
 * Send a request using fetch api
 * @param { String } url
 * @return { JSON }
 */

const Apifetch = (url) => {
  const [data, setData] = useState(null)
  const Navigate = useNavigate()

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(ConvertData(resp, url))
      })
      .catch((error) => {
        if (error) {
          Navigate("/error")
        }
      })
  }, [url, Navigate])

  return data
}

export default Apifetch
