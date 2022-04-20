import { useEffect, useState } from "react"

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
