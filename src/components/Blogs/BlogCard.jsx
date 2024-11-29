import React from "react";

import styles from "./BlogCard.module.css";
import { getImageUrl } from "../../utils";

export const BlogCard = ({
  blog : { blogTitle, blogDescription, bulletPoints },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{blogTitle}</h3>
      <p className={styles.description}>{blogDescription}</p>
      {/* <ul className={styles.bulletpoint}>
        {bulletPoints.map((bulletpoint, id) => {
            return <li key={id}>{bulletpoint}</li>
        })}
      </ul> */}
    </div>
  );
};