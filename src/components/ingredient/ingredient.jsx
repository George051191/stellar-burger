import React from "react";
import cardStyles from './ingredient.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CLICK_ON_INGREDIENT } from "../../services/actions/ingredient";
import { useDrag } from "react-dnd";
import { builtinModules } from "module";

export function Ingredient(props) {
  const { id } = props
  const { bun } = useSelector(store => store.constructorState)

  const dispatch = useDispatch();
  const { ingredients } = useSelector(store => store.burgerData);
  const [, dragRef] = useDrag({
    type: 'item',
    item: { id }

  })

  function selectIngredient(evt, data) {
    return data.filter(item => {
      return item._id === evt.currentTarget.id
    })

  }



  return (


    <li ref={dragRef} id={props.id} className={cardStyles.ingredient__item} onClick={(evt) => { dispatch({ type: CLICK_ON_INGREDIENT, item: selectIngredient(evt, ingredients) }) }}   >
      {!!props.amount && <Counter count={props.amount} size="default" />}
      {!!bun.amount && props.type === 'bun' && bun._id === id && <Counter count={bun.amount} size="default" />}
      <img className={`mb-1 pl-4 pr-4  ${cardStyles.ingredient__image}`} src={props.image} alt={props.description} />
      <div className={`mb-1 ${cardStyles.ingredient__info}`}>
        <p className='mr-1 text text_type_digits-default'>{props.cost}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`mt-1 text text_type_main-default ${cardStyles.ingredient__text}`}>{props.name}</p>
    </li>

  )
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,


}
