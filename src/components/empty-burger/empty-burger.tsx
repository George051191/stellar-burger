import React, { FunctionComponent } from "react";
import styles from './empty-burger.module.css';

export const EmptyBurger: FunctionComponent<{ burgerStyle: string }> = (props) => {

  return (
    <div className={props.burgerStyle}  >
      <div className={styles.element}>
        <h2 className={`${styles.textalign} text text_type_main-large`} >Собери</h2>
      </div>
      <div className={styles.centralelement}>
        <h2 className={`${styles.textalign} text text_type_main-large`}  >Вкусный</h2>
      </div>
      <div className={styles.elementdown} >
        <h2 className={`${styles.textalign} text text_type_main-large`} >Бургер</h2>
      </div>
    </div>


  )


}
