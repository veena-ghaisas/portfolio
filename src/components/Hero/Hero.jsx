import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Veena</h1>
        <p className={styles.description1}>
        MBA in Operation and Supply Chain Management
        </p>
        <p className={styles.description2}>
        Bachelor of Engineering in Electronics and Telecommunication Engineering
        </p>
        <a href="https://docs.google.com/document/d/1hCjKFFDp3ZvOH4ynZgwMKOEQb3wbxRDB/edit?usp=drive_link&ouid=102085607614586691466&rtpof=true&sd=true" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
