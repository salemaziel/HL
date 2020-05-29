import React from "react";


import bannerStyles from './home.module.css'

const HomeBanner = () => (
  <section id="banner">
    <div className="inner">
      <h1
        style={{
          textShadow: "3px 3px 3px black",
          textAlign: "left",
          textAlignLast: "auto",
        }}
      >
        {" "}
        Do You Really Think? <br />
        <h2
          style={{
            background: "rgba(0,0,0,0.9)",
            width: "fit-content",
            padding: "5px",
          }}
        >
          Or Are You <span style={{ color: "red" }}> Told </span> What To Think?
        </h2>
      </h1>
      <div className={bannerStyles.content}>
        <p style={{ textShadow: "3px 3px 3px black", fontWeight: "bold" }}>
          Most Alleged "Free Thinkers" Are Anything But. <br />
          <br />
          They Pay           <span
            style={{
              color: 'red',
              fontWeight: 'bolder'
            }}
          > Lip Service </span> to Free Thought, <br />
          Criticizing Others As <span
            style={{
              color: 'red',
              fontWeight: 'bolder'
            }}
          > Unthinking Sheep;</span> <br />
          While They Themselves Remain
          <span
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              width: "fit-content",
              padding: "5px",
              marginLeft: "10px",
            }}
          >
            Intellectually <span style={{ color: "red" }}>Clumsy</span>,{" "}
            <span style={{ color: "red" }}>Lazy</span>, and{" "}
            <span style={{ color: "red" }}>Disingenuous </span>{" "}
          </span>{" "}
          <br />
        </p>
        {/*<ul className="actions special">
          <li><a href="#" className="button large next" style={{textShadow:"2px 2px 3px black", boxShadow: '3px 3px 50px 3px black'}}>Our Perspective</a></li>
    </ul>*/}
      </div>
    </div>
  </section>
);

export default HomeBanner;
