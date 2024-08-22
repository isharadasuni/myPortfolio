import React from "react";
import "./home.scss";
import Image1 from "../src/Image/image1.JPG";

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

<hr/>

            <div className="profile">

                <div className="image">
                    <img src={Image1} alt="profile image"/>

                </div>

                <div className="info">
                    <p className="infoHead">Hello, I'm </p>
                    <p className="infoName">Ishara Dasuni Senadheera</p>
                    <p className="infoRole">Software Engineer</p>
                    <button className="download">Download CV</button>
                    <button className="contact">Contact Info</button>

                </div>

            </div>







        </div>
    )


}
export default Home;