import React from "react";
import { IngredientCard } from "../components/ingredient-card/ingredient-card";
import styles from './order-stuff-page.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderStuffPage = () => {
  return (
    <div className={styles.conteiner}>
      <p className={` text text_type_digits-default mb-10 ${styles.idstyle}`} >#5545454</p>
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
