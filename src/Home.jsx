import React from "react";
import "./home.scss";
import Image1 from "../src/Image/image1.JPG";
import LinkedIn from "../src/Image/LinkedIn.png";
import GitHub from "../src/Image/GitHub.png";
import PDF from "../src/Doc/Resume - Ishara Dasuni Senadheera.pdf";

const Home = () => {

    return (

        <div className="home" >




            <div className="navBar">

                <div className="name">
                    ISHARA DASUNI SENADHEERA
                </div>

                <div className="tabs">
                    <div className="content">About </div>
                    <div className="content">Project </div>
                    <div className="content">Contact</div>

                </div>

            </div>


            <hr />


            <div className="profile">

                <div className="image">
                    <img className="img1" src={Image1} alt="profile image" />
                </div>

                <div className="info">
                    <p className="infoHead">Hello, I'm </p>
                    <p className="infoName">Ishara Dasuni Senadheera</p>
                    <p className="infoRole">Software Engineer</p>

                    <a href={PDF} download="Resume - Ishara Dasuni Senadheera.pdf">
                        <button className="download">Download CV</button>
                    </a>

                    <button className="contact">Contact Info</button>

                    <p>
                        <a href="https://www.linkedin.com/in/ishara-dasuni-senadheera-12207820b/" target="_blank">
                        <img className="img2" src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/isharadasuni" target="_blank">
                        <img className="img2" src={GitHub} alt="GitHub" />
                        </a>
                    </p>


                </div>


            </div>

            <hr />









        </div>
    )


}
export default Home;