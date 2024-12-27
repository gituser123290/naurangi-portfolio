import '../styles/experience.css';
export default function Experience() {
  return (
    <>
    <div className="experience_main">
        <h2>Experience</h2>
        <div className='exp_main_one'>
            <div className="exp_one">
                <p id='p'>Web Developer @Talenrn Company | 2021</p>
                <p>Duration: 1.6 years</p>
                <p>Tech Stack: HTML5, CSS3, JavaScript</p>
                <p>Responsibilities: Developed a Single Page application using HTML5, CSS3, JavaScript.</p>
            </div>
            <div className="exp_two">
                <p id='p'>Full Stack Developer @Code Suadaz Pvt Ltd | 2024 </p>
                <p>Duration: 1 years</p>
                <p>Tech Stack: React, Next.js, Node.js,Express.js</p>
                <p>Responsibilities: Developed a full-stack application using React, Next.js, Node.js,Express.js, as well as implemented authentication and authorization using JWT, and integrated third-party APIs.</p>
            </div>
        </div>
        <div className="exp_three">
            <p id='p'>Full Stack Engineer | Freelancer | 2022</p>
            <p>Duration: 2 years</p>
            <p>Tech Stack :React, Node.js, Express, MongoDB</p>
            <p>Responsibilities: Developed a full-stack application using React, Node.js, Express, and MongoDB, as well as implemented authentication and authorization using JWT.</p>
        </div>
    </div>
    </>
  )
}
