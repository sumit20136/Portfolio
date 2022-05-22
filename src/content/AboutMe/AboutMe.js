import React from 'react'
import './AboutMe.css'
export default function AboutMe() {
    return (
        <div className='parent' id="AboutMe">
            <div classname='title'>
                <center> <h1>About Me</h1></center>
            </div>
            <div className='sub-parent'>
                <div className='content'>
                    <div className='image'></div>
                    <div className='description'>
                        Full Stack Web Developer with background knowledge of MERN Stacks, along with robust foundation in data Structures and Algorithms. Strong professional behaviour which will proove as an asset to company.
                        <br />
                        <br />
                        <br />
                        <b>Here are a few Highlights:</b>
                        <br />
                        <br />
                        <br />
                        <ul>
                            <li>Full Stack web Developer</li>
                            <li>Proficient in Data Structures and Algorithms</li>
                            <li>Machine learning enthusiast</li>
                            <li>managing Database</li>
                            <li>Professional Behaviour</li>
                        </ul>
                        <a href="portfolio\public\Resume_Sumit-Soni.pdf" download="Resume.pdf">
                            <button type="button" className="btn btn-outline-light">Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}