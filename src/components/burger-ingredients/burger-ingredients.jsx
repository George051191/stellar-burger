import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from './burger-ingredients.module.css';
import { IngredientType } from '../ingredient-type/ingredient-type';

const data=[
    {
        "_id": "60666c42cc7b410027a1a9b1",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    },
    {
        "_id": "60666c42cc7b410027a1a9b2",
        "name": "Флюоресцентная булка R2-D3",
        "type": "bun",
        "proteins": 44,
        "fat": 26,
        "carbohydrates": 85,
        "calories": 643,
        "price": 988,
        "image": "https://code.s3.yandex.net/react/code/bun-01.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
        "__v": 0,
        "number": 5
    }


]
const souce=[
    {
        "_id":"60666c42cc7b410027a1a9b7",
        "name":"Соус Spicy-X",
        "type":"sauce",
        "proteins":30,
        "fat":20,
        "carbohydrates":40,
        "calories":30,
        "price":90,
        "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
        "__v": 0
        
    },
    {
        "_id":"60666c42cc7b410027a1a9b9",
        "name":"Соус традиционный галактический",
        "type":"sauce",
        "proteins":42,
        "fat":24,
        "carbohydrates":42,
        "calories":99,
        "price":15,
        "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
        "__v":0
       },
       {
        "_id":"60666c42cc7b410027a1a9b8",
        "name":"Соус фирменный Space Sauce",
        "type":"sauce",
        "proteins":50,
        "fat":22,
        "carbohydrates":11,
        "calories":14,
        "price":80,
        "image":"https://code.s3.yandex.net/react/code/sauce-04.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-04-large.png",
        "__v":0
       },
       {
        "_id":"60666c42cc7b410027a1a9bc",
        "name":"Плоды Фалленианского дерева",
        "type":"main",
        "proteins":20,
        "fat":5,
        "carbohydrates":55,
        "calories":77,
        "price":874,
        "image":"https://code.s3.yandex.net/react/code/sp_1.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
        "__v":0
       },
       {
        "_id":"60666c42cc7b410027a1a9bb",
        "name":"Хрустящие минеральные кольца",
        "type":"main",
        "proteins":808,
        "fat":689,
        "carbohydrates":609,
        "calories":986,
        "price":300,
        "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        "__v":0
       },
       {
        "_id":"60666c42cc7b410027a1a9ba",
        "name":"Соус с шипами Антарианского плоскоходца",
        "type":"sauce",
        "proteins":101,
        "fat":99,
        "carbohydrates":100,
        "calories":100,
        "price":88,
        "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
        "__v":0
       }


 ] 



export function BurgerIngredients() {
    const [current, setCurrent]=React.useState('Булки')
    return (
        <div className={ingredientsStyles.burger__ingredients}>
            <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
            <ul className={`mb-10 ${ingredientsStyles.burger__nav}`}>
                <li>
                    <Tab value="Булки" active={current==='Булки'} onClick={setCurrent}>
                        Булки
                    </Tab>
                </li>
                <li>
                    <Tab value="Соусы" active={current==='Соусы'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                </li>
                <li>
                    <Tab value="Начинки" active={current==='Начинки'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </li>
            </ul>
            <IngredientType ingredientName='Булки' data={data} />
            <IngredientType ingredientName='Соусы' data={souce}/>
        </div>

    )
}

