import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import NavbarComp from "./components/Navbar"
import Summary from "./components/Summary"
import { Alert } from "react-bootstrap"

function App() {
  return (
    <>
      <Router>
        <div>
          <NavbarComp />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Alert style={{margin:20}} variant="danger">Page Not Found</Alert>} />
          <Route path="/details" element={<Summary />} />
        </Routes >
      </Router>
    </>
  )
}

export default App
