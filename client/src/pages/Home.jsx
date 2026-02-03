function downloadCV() {
  const link = document.createElement('a')
  link.href = '/pdf/Curriculum Vitae - Matias Sesto.pdf'
  link.download = 'CV - Matias Sesto.pdf'
  link.click()
}

function Home() {
  return (
    <section id="home" className="flex">
      <img src="/img/profile.jpg" alt="Profile picture" id="profile2" />
      <div id="information">
        <h1>Matias Sesto</h1>
        <h2 className="blue-text">Full Stack Developer</h2>
        <p>I focus on building clean, maintainable solutions and continuously improving through real projects.</p>
        <button className="zoom" id="cv" onClick={downloadCV}>Download CV</button>
      </div>
    </section>
  )
}

export default Home
