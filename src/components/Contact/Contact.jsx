import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">ghaisas.veena@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/veena-ghaisas/">linkedin.com/veena-ghaisas</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/instagram.png")} alt="LinkedIn icon" />
          <a href="https://www.instagram.com/august_mizzle/?igsh=MTRjN3dxcDlla3UwbA%3D%3D">Veena Ghaisas</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="LinkedIn icon" />
          <a>+91-7745810303</a>
        </li>
      </ul>
    </footer>
  );
};
