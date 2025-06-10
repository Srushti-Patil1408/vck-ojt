import React from "react"
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css'

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionsPage from "./pages/AdmissionsPage"





const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admissions" element={<AdmissionsPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App