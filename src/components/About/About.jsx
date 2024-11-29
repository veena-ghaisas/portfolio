import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
              I am an ambitious MBA student specializing in Operations and Supply Chain Management, 
              with close to a year of hands-on experience as an Application Development Associate at Accenture. 
              My background highlights my ability to streamline processes and boost operational performance through innovative approaches. 
              I am driven by a passion for utilizing technology to implement transformative changes in supply chain strategies.
              My goal is to leverage my analytical expertise and technical skills to optimize supply chain operations and achieve excellence 
              in a progressive organization. Dedicated to enhancing efficiency, I am committed to delivering impactful and measurable outcomes 
              through innovative solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p>
              <span style={{ fontWeight: 'bold' }}>Profile</span> : MBA in Operation and Supply Chain Management<br />
                <br />
                <span style={{ fontWeight: 'bold' }}>Age</span> : 25<br />
                <br />
                <span style={{ fontWeight: 'bold' }}>Education</span> : Pursuing MBA, Bachelor of Engineering<br />
                <br />
                <span style={{ fontWeight: 'bold' }}>Language</span> : English, Hindi, Marathi<br />
                <br />
                {/* <span style={{ fontWeight: 'bold' }}>Hobbies</span> : <br /> */}
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
