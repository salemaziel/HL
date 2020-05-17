import React from 'react'



const AboutSectionOne = () => (
    <section id="about" className="wrapper">
    <div className="inner">
      <div className="split">
        <div className="content">
          <header>
            <h2>About</h2>
          </header>
          <p>Lorem ipsum dolor amet et donec convallis placerat varius. Phasellus sagittis, urna blanSapien lectus lorem tempus ut purus consequat. Sed veroeros et nisl urna lacinia lorem. Aenean at adipiscing lorem. Nunc risus augue, ullamcorper eget posuere.</p>
         {/* <ul className="actions">
            <li><a href="#" className="button next">Full Story</a></li>
</ul> */}
        </div>
        <ul className="contact-icons">
          <li><a href="#" className="icon brands alt fa-twitter"><span className="label">twitter.com</span></a></li>
          <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">facebook.com</span></a></li>
          <li><a href="#" className="icon brands alt fa-instagram"><span className="label">instagram.com</span></a></li>
          <li><a href="#" className="icon solid alt fa-envelope"><span className="label">info@headlyceum.com</span></a></li>
        </ul>
      </div>
    </div>
  </section>
)

export default AboutSectionOne 