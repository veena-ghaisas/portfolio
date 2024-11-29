import React from "react";

import photos from "../../data/photos.json";
import { getImageUrl } from "../../utils";
import styles from "./Gallery.module.css";

export const Gallery = () => {
    return (
    <section className={styles.container} id="gallery">
        <h2 className={styles.title}>Gallery</h2>
        <div className={styles.photoContainer}>
            {photos.map((photo, id) => {
                return (
                <div key={id} className={styles.photo}>
                    <img src={getImageUrl(photo.imageSrc)} alt="" />
                </div>
                );
            })
            }
        </div>
    </section>
    );
};