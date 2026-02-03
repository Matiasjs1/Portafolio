function About() {
  return (
    <section id="about" className="flex">
      <h2>ABOUT <span className="blue-text">ME</span></h2>
      <div id="contain-about">
        <div id="personal-info">
          <h3>PERSONAL INFORMATION</h3>
          <div id="info">
            <p><span className="text-secondary">Full Name:</span> Matias Joel Sesto</p>
            <p><span className="text-secondary">Freelance Availability:</span> Available</p>
            <p><span className="text-secondary">Languages:</span> Spanish, English</p>
          </div>
        </div>
        <div id="profile">
          <h3>PROFILE</h3>
          <p>I enjoy turning ideas into functional and well-structured solutions. I’m comfortable working independently and in team environments, and I value clear communication and responsibility.</p>
        </div>
        <div id="how-i-work">
          <h3>HOW I WORK</h3>
          <p>I focus on writing clean, readable, and maintainable code. I understand the problem before coding and iterate until the solution feels solid and intuitive. I’m constantly learning and adapting to new technologies.</p>
        </div>
      </div>
      
      <h2><span className="blue-text">MY</span> SKILLS</h2>
      <div id="skills">
        <div className="card zoom">
          <img src="/img/skills/javascript.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/mysql.png" alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/php.png" alt="PHP" id="php" />
          <p>PHP</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/git.png" alt="Git" />
          <p>Git</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/java.png" alt="Java" />
          <p>Java</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/solidity.png" alt="Solidity" />
          <p>Solidity</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/python.png" alt="Python" />
          <p>Python</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="card zoom">
          <img src="/img/skills/arduino.png" alt="Arduino" />
          <p>Arduino</p>
        </div>
      </div>
      
      <h2><span className="blue-text">MY</span> EDUCATION</h2>
    </section>
  )
}

export default About
