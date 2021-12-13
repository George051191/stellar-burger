import React from 'react';
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { burgerIngredientsUrl } from '../utils';


function App() {
  const [bunsData, setBunsData] = React.useState([]);
  const [souceData, setSouceData] = React.useState([]);
  const [fillingData, setFillingData] = React.useState([]);
  const [burgerIngredientData, setBurgerData] = React.useState([]);
  ///сохранаем здесь элемент ингридиента  по которому кликнули
  const [currentSelect, setCurrentSelect] = React.useState([]);

  const [isClicked, setButtonState] = React.useState(false);
  const [isSelected, setSelect] = React.useState(false)

  ///открытие попапа с инфо об ингридиенте
  function selectIngredient(e) {
    setSelect(true);
    const curentIngredientData = burgerIngredientData.filter(item => {
      return item.name === e.currentTarget.id
    })
    setCurrentSelect(curentIngredientData);
  }

  function closeIngredientPopup() {
    setSelect(false)
  }

  ///открытие и закрытие попапа с инфо заказа
  function openPopup() {
    setButtonState(true)
  }

  function closePopup() {
    setButtonState(false)
  }


  React.useEffect(() => {
    function getBurgerData() {
      fetch(burgerIngredientsUrl)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setBurgerData(res.data);
          const newBuns = res.data.filter(element => { return element.type === 'bun'; });
          setBunsData(newBuns);
          const newSouces = res.data.filter(element => { return element.type === 'sauce'; });
          setSouceData(newSouces);
          const newFillings = res.data.filter(element => { return element.type === 'main'; });
          setFillingData(newFillings);
        })
        .catch(err => console.log(err));
    }
    getBurgerData();
  }, [])

  return (
    <>
      <AppHeader />
      <main className={styles.app}>
        <section className={styles.app__constructor}>
          <BurgerIngredients ingredients={currentSelect[0]} buns={bunsData} souce={souceData} filling={fillingData} isClicked={isSelected} selectItem={selectIngredient} closeModal={closeIngredientPopup} />
          <BurgerConstructor makeOrder={openPopup} isClicked={isClicked} staff={burgerIngredientData} closeByClick={closePopup} />
        </section>
      </main>
    </>
  )
}

export default App;
