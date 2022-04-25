import { useEffect, useState } from "react"

/**
 * Send custom request using fetch api
 * @param { String } url
 * @return { JSON }
 */

const Apifetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp)
      })
  }, [url])

  return data
}

export default Apifetch
