import React from "react";
import '../App.css'
import Header from "../components/Header/Header";


const CoursesPage = () => {
    return (
        <div>
            <Header/>
            <h1 className="main">Our Academic Programs</h1>
            
                <p className="p">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

            <h2 className="q">Discover Campus Life</h2>

                <video id="demo" src="/college-tour-FAmcnyfF.mp4" type="/video.mp4" controls loops></video>
                <h4 className="h5">Get a glimpse of the vibrant academic and social life at Vivekanand Collge.</h4>


                <h2 className="q">Undergraduate Programs (UG)</h2>

                <ul className="ul">
                    <li>Bachelor of Science (B.Sc.)</li>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Information Technology (3 years)</li>
                    </ul>

                    <li>Bachelor of Commerce (B.Com)</li>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>
                    </ul>

                    <li>Bachelor of Arts (B.A.)</li>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>
                        

                    

                    
                </ul>

                <h2 className="q">Postgraduate Prgrams (PG)</h2>

                <ul className="ul">
                    <li>Master of Science (M.Sc.)</li>
                    <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                    </ul>

                    <li>Master of Commerce (M.Com) (2 years)</li>
                    <li>Master of Arts (M.A.) (2 years)</li>
                </ul>


                <h2 className="q">Program Details & Fee Structure (Annual)</h2>

                <table  border="0.8px" className="t">
                    <thead>
                        <tr className="th">
                            <th>Program Type</th>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Annual Fee (INR)</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="tb">
                            <td>UG</td>
                            <td>B.Sc. Computer Science</td>
                            <td>3 Years</td>
                            <td>₹ 85,000</td>
                            <td>10+2 with PCM (50%)</td>
                        </tr>

                        <tr className="tb">
                            <td>UG</td>
                            <td>B.Com. Accounting & Finance</td>
                            <td>3 Years</td>
                            <td>₹ 70,000</td>
                            <td>10+2 Commerce (45%)</td>

                        </tr>

                        <tr className="tb">
                            <td>PG</td>
                            <td>M.Sc. Information Technology</td>
                            <td>2 Years</td>
                            <td>₹ 95,000</td>
                            <td>B.Sc. IT/CS (50%)</td>
                        </tr>
                        
                    </tbody>

                </table>

                <h2 className="q">Specialized & Vocational Courses</h2>

                <p className="p">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

                <h5 className="h">Have questions about a specific course?</h5>

                <a href="/Contact"><button id="button">Inquire About Courses</button></a>





        </div>
    )
}

export default CoursesPage