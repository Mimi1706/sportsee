import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FetchProvider } from "./Context/fetchContext"

import Dashboard from "./Pages/Dashboard/Dashboard"
import Home from "./Pages/Home/Home"
import Error from "./Pages/Error/Error"

function App() {
  return (
    <div className="App">
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/dashboard/:idURL" element={<Dashboard />}></Route>
            <Route path="/error" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>
    </div>
  )
}

export default App
