import React from "react";
import '../App.css'
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";



const AdmissionsPage = () => {
    return (
        <div id="bg">
        <div className="page-container">
            <Header/>
            <h1 className="main">Admissions at Vivekanand College</h1>

                <p className="p">Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.<br></br>

                Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>

            <h2 className="q">Eligibility Criteria for Undergraduate Programs</h2>

            <table border="0.8px" className="t"  >
                <thead>
                    <tr className="th">
                        <th>Program</th>
                        <th>Minimum Qualification</th>
                        <th>Required Subjects</th>
                        <th>Minimum Marks (%)</th>
                    </tr>
                    
                </thead>

                <tbody>
                    <tr className="tb">
                        <td>B.Sc. Computer Science</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Physics, Chemistry, Maths</td>
                        <td>50%</td>
                    </tr>

                    <tr className="tb">
                        <td>B.Com. Accounting & Finance</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Commerce Stream</td>
                        <td>45%</td>
                    </tr>

                    <tr className="tb">
                        <td>B.A. English Literature</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Any Stream</td>
                        <td>40%</td>
                    </tr>
                </tbody>

            </table>

            <h2 className="q">Application Process</h2>

                <ol className="ul">
                    <li><b>Online Application:</b> Fill out the application form available on our portal.</li>
                    <li><b>Document Submission:</b> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
                    <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
                    <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>

                </ol>

                <p className="p">For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our{" "}
                     <Link to="/courses" >Courses Page</Link> or{" "} 
                     <Link to="/contact">Contact us</Link> directly. 
                     </p>

                


        </div>
        </div>
    )
}

export default AdmissionsPage