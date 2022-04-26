import { useContext } from "react"
import { fetchContext } from "../../Context/fetchContext"

const ContextButton = () => {
  const { toggleFetch, fetch } = useContext(fetchContext)

  return (
    // useContext allows to retrieve function to switch between API and Mock
    <button onClick={() => toggleFetch()}>
      Data From {fetch === "API" ? "API" : "Mock"}
    </button>
  )
}

export default ContextButton
