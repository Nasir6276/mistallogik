import React from 'react'
import './project.css'
import 'aos/dist/aos.css';

const Project = () => {
  return (
    <div className='ml_projects'>
        <div className="ml_projects-container">
            <h1>Selected Projects</h1>
            <div className="ml_project">
                {data.map((item, img) => (
                    <div 
                        className="ml_project-single"
                        data-aos="fade-up" 
                        data-aos-duration="8000"
                    >
                        <div className="ml_project-img"></div>
                        <a href="#project">{item.title}</a>
                    </div>
                ))}
            </div>
            <hr />
            <h1>Wait, there’s more</h1>
            <h3>
                My Superpower is crafting beautiful & functional products that people love to use and I ensure to 
                maintain a certain level of accesibility in my designs  My Superpower is crafting beautiful & functional 
                products that people love to use and I ensure to maintain a certain level of accesibility in my designs  
            </h3>
            <div className="ml_projects-cards">
                    <div className="ml_projects-card"></div>
                    <div className="ml_projects-card"></div>
                    <div className="ml_projects-card"></div>
            </div>
        </div>
    </div>
  )
}

const data = [
    {
        title: 'Balanceè Website Redesign + Brand Identity'
    },
    {
        title: 'Paypoint Mobile App (Case Study)'
    },
    {
        title: 'Gettally Web Application (Coming Soon)'
    },
    {
        title: 'Nigerian Made Website and Brand Identity'
    },
    {
        title: 'Paylater Brand Identity (Featured on Behance)'
    },
    {
        title: 'Mhamd Cloud Accounting Web App'
    }
]

export default Project