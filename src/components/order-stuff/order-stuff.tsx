import React from "react";
import styles from './order-stuff.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientCard } from "../ingredient-card/ingredient-card";

export const OrderStuff = () => {

  return (
    <div className={styles.conteiner}>
      <h3 className="text text_type_main-medium mb-3" >Black Hole Singularity острый бургер</h3>
      <p className={`text text_type_main-default mb-15 ${styles.textgreen}`}>Выполнен</p>
      <p className="text text_type_main-medium mb-6" >Состав:</p>

      <div className={`${styles.ingredients} mb-10`}>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard/>
      </div>
      <div className={styles.dateandcost}>
        <p className="text text_type_main-default text_color_inactive" >Вчера, 13:50 i-GMT+3</p>
        <div className={styles.box}>
          <p className="text text_type_digits-default mr-2">510</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>



    </div>
  )

}
