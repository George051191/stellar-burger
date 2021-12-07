import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from './burger-ingredients.module.css';
import { IngredientType } from '../ingredient-type/ingredient-type';
import PropTypes from 'prop-types';



export function BurgerIngredients(props) {
    const [current, setCurrent]=React.useState('Булки')
    const bunsRef=React.useRef();
    const soucesRef=React.useRef();
    const intoRef=React.useRef();

    return (

        <div className={ingredientsStyles.burger__tabs}>
            <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
            <ul className={`mb-10 ${ingredientsStyles.burger__nav}`}>
                <li>
                    <Tab value="Булки" active={current==='Булки'} onClick={(value) => { setCurrent(value); bunsRef.current.scrollIntoView() }} >
                        Булки
                    </Tab>
                </li>
                <li>
                    <Tab value="Соусы" active={current==='Соусы'} onClick={(value) => { setCurrent(value); soucesRef.current.scrollIntoView() }}>
                        Соусы
                    </Tab>
                </li>
                <li>
                    <Tab value="Начинки" active={current==='Начинки'} onClick={(value) => { setCurrent(value); intoRef.current.scrollIntoView() }}>
                        Начинки
                    </Tab>
                </li>
            </ul>
            <div className={ingredientsStyles.burger__ingredients}>
                <IngredientType ingredientName='Булки' data={props.data} ref={bunsRef} />
                <IngredientType ingredientName='Соусы' data={props.souce} ref={soucesRef} />
                <IngredientType ingredientName='Начинки' data={props.into} ref={intoRef} />
            </div>

        </div>



    )
}

BurgerIngredients.propTypes={
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            image_mobile: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    souce: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            image_mobile: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    into: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            image_mobile: PropTypes.string,
            price: PropTypes.number,
        })
    )
}