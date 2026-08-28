function Contact() {
  return (
    <section id="contact" className="flex">
      <h2>CONTACT <span className="blue-text">ME</span></h2>
      <p id="contact-lead">
        I&apos;m open to work opportunities, freelance projects and collaborations.
        The fastest way to reach me is by email or LinkedIn.
      </p>
      <div id="contact-cards">
        <a className="contact-card zoom" href="mailto:matiasjsesto@gmail.com">
          <h3>Email</h3>
          <p>matiasjsesto@gmail.com</p>
        </a>
        <a className="contact-card zoom" href="https://www.linkedin.com/in/matias-sesto-b5aa8b33a" target="_blank" rel="noreferrer">
          <h3>LinkedIn</h3>
          <p>/in/matias-sesto</p>
        </a>
        <a className="contact-card zoom" href="https://github.com/Matiasjs1" target="_blank" rel="noreferrer">
          <h3>GitHub</h3>
          <p>@Matiasjs1</p>
        </a>
      </div>
      <p id="contact-location">CABA (Saavedra), Argentina · Available for remote work</p>
    </section>
  )
}

export default Contact
