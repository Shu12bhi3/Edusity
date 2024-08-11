import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorrow's Leaders Today</h2>
                <p>We have the immense privilege of sitting on the sacred soil where Western Australian kaartdijin,
                 or knowledge, began. It has been a place to gather and learn for tens of thousands of years, with stories
                 and lessons shared from generation to generation of the world’s oldest continuous culture.</p>
                <p> Today, we welcome you to continue seeking and sharing wisdom with us. Our students take their learning beyond the books,
                 at the cutting edge of knowledge creation, from passionate lecturers with real industry experience and connections.
                 We’ll support them in their learning journeys and help set them up for a career they’ll love.</p>
                 <p>The global impact of our research and education places us as a world top 100 university (QS 2024). 
                 This means students join a community of passionate, intelligent and resourceful leaders who are driving innovation and change.
                 They’ll connect with and work alongside leaders in education, research and industry, and follow in the footsteps of our thousands 
                 of graduate success stories</p>
            </div>
        </div>
    )
}

export default About