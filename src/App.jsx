import React from "react"
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import About from "./pages/Aboutpage"
import Contact from "./pages/ContactPage"
import Courses from "./pages/CoursesPage"
import Admissions from "./pages/AdmissionsPage"
import './App.css'





const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admissions" element={<Admissions/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App