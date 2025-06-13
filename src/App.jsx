import React, { useState } from "react"
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css'

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionsPage from "./pages/AdmissionsPage"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"





const App = () => {

  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Srushti Rajesh Patil"
          studentPhotoUrl="/srushti.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/admissions" element={<AdmissionsPage/>}/>
        </Routes>
        <div>
          <ChatbotComponent/>
        </div>
      </Router>
      
      
    </div>
    </>
  )
}


export default App