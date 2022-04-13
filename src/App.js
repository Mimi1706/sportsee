import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./Pages/Dashboard/Dashboard"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
