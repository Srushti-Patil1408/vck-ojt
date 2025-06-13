import React from "react";
import '../App.css'
import Header from "../components/Header/Header";


const HomePage = () => {
    return (
        
    <div id="bg">
        <div className="nav1"><b>Vivekanand College</b></div>
      
        <div className="page-container">
            
            <nav className="nav">
        
            <Header/>
            
            
            </nav>
            <div className="hero-section">
                <img className="v" src="vck1.jpg"></img>
                <div className="hero-overlay-text">
                    <h1 className="h1">Welcome to Vivekanand College!</h1>

                    <h5 className="h1">Your journey to excellence starts here.</h5>

                    <a href="Admissions"><button id="b1" >Apply Now!</button></a>
                </div>
            </div>

            <p className="p">**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.<br></br>

            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

            <h2 className="q">Why Choose Vivekanand College?</h2>

            <ul className="ul">
                <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
            </ul>

            <h2 className="q">Campus Life & Facilities</h2>

            
            <img id="vck" src="/students-studying-DbLGuwF_ (2).jpeg"/>
            <img id="vck1" src="/campus-life-Crkero7B.jpg"/>
            <p className="p">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <h5 className="h">Ready to explore our courses?</h5>

            <a href="Courses"><button id="button">Explore Courses</button></a>
            <a href="https://vck.codewonders.in/courses"></a>


        
        </div>

    </div>
    )
}


export default HomePage