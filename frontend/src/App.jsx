import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DecisionT from "./pages/DecisionT";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="h-screen w-screen flex justify-center items-center">
              <p className="text-5xl text-red-600 font-bold">PGM Virtual Lab</p>
            </main>
          }
        />
        <Route path="/deciT" element={<DecisionT />} />
      </Routes>
    </Router>
  )
}

export default App