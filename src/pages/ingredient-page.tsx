import React from "react";
import ingredientModalStyles from './ingredient-page.module.css';
import { useSelector, useDispatch } from "../services/types/hooks";
import { useLocation } from "react-router-dom";
import { IIngredient } from "../utils/interfaces";


export const IngredientPage = () => {
  const { currentItem } = useSelector(state => state.currentSelect);
  const { ingredients } = useSelector(state => state.burgerData)
  const [state, setState] = React.useState(currentItem)

  const location = useLocation();

  const a = Array.from(location.pathname).splice(13).join('')


  async function findCurrent() {
    const current = ingredients.find((item: typeof currentItem) => { return item._id === a });
    current && setState(current)
  }


  React.useEffect(() => {

    findCurrent()

  }, [])



  return (

    < div className={`${ingredientModalStyles.modal__conteiner} mb-15`}>
      <img src={state.image} alt={currentItem.name} className={`${ingredientModalStyles.modal__image} mb-4`} />
      <p className='mb-8 text text_type_main-medium'>{state.name}</p>
      <div >
        <ul className={ingredientModalStyles.modal__list}>
          <li className={`mr-5 text text_type_main-default text_color_inactive ${ingredientModalStyles.modal__listelement}`}>
            <p className={`${ingredientModalStyles.modal__text} mb-2`}>Калории, ккал</p>
            <p className={`${ingredientModalStyles.modal__text} text text_type_digits-default`}>{state.calories}</p>
          </li>
          <li className={`mr-5 text text_type_main-default text_color_inactive ${ingredientModalStyles.modal__listelement}`}>
            <p className={`${ingredientModalStyles.modal__text} mb-2`}>Белки, г</p>
            <p className={`${ingredientModalStyles.modal__text} text text_type_digits-default`}>{state.proteins}</p>
          </li>
          <li className={`mr-5 text text_type_main-default text_color_inactive ${ingredientModalStyles.modal__listelement}`}>
            <p className={`${ingredientModalStyles.modal__text} mb-2`}>Жиры, г</p>
            <p className={`${ingredientModalStyles.modal__text} text text_type_digits-default`}>{state.fat}</p></li>
          <li className={` text text_type_main-default text_color_inactive ${ingredientModalStyles.modal__listelement}`}>
            <p className={`${ingredientModalStyles.modal__text} mb-2`}>Углеводы, г</p>
            <p className={`${ingredientModalStyles.modal__text} text text_type_digits-default`}>{state.carbohydrates}</p></li>
        </ul>
      </div>
    </div >


  )

}
