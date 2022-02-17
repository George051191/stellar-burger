import React, { FunctionComponent } from "react";
import { useDispatch } from "../services/types/hooks";
import { getBurgerData } from "../services/actions/burger-ingredients";
import style from './burger-page.module.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import Api from "../utils/Api";
import { getCookie, setCookie } from "../utils/utils";

export const Constructor: FunctionComponent = () => {

  React.useEffect(() => {
    if (!getCookie('token')) {
      const match = getCookie('refreshToken')
      match && Api.refreshToken(match).then(res => { console.log('jhjh'); setCookie('token', res.accessToken.split('Bearer ')[1], { expires: 12000000 });  setCookie('refreshToken', res.refreshToken) })
    }
  })


  return (

    <section className={`${style.constructor}`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </section>

  )
}
