import React, { FunctionComponent } from "react";
import styles from "./ingredient-image.module.css";

export const IngredientImage: FunctionComponent<{ image: string }> = (
  props
) => {
  return (
    <div className={styles.firstimageoverlay}>
      <div className={styles.imagebox}>
        <img alt="ингредиент" className={styles.image} src={props.image} />
      </div>
    </div>
  );
};
