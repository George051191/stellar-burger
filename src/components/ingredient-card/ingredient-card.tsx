import React from "react";
import styles from './ingredient-card.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientCard = () => {

  return (
    <div className={styles.card}>

      <div className={styles.imageoverlay} >
        <div className={styles.imagebox} >
          <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
        </div>
      </div>
      <p className='text text_type_main-default ml-4 mr-25 mt-5 mb-5 '>Флюоресцентная булка R2-D3</p>
      <div className={styles.box}>
        <p className="text text_type_digits-default mr-2" >2 x 300</p>
        <CurrencyIcon type="primary"/>
      </div>

    </div>
  )

}
