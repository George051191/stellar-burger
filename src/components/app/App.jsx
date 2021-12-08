import React from 'react';
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { burgerIngredientsUrl } from '../utils';
import { Modal } from '../modal/modal';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

function App() {
  const [bunsData, setBunsData] = React.useState([]);
  const [souceData, setSouceData] = React.useState([]);
  const [fillingData, setFillingData] = React.useState([]);
  const [burgerIngredientData, setBurgerData] = React.useState([]);


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
          <BurgerIngredients data={bunsData} souce={souceData} into={fillingData} />
          <BurgerConstructor staff={burgerIngredientData} />

        </section>

      </main>
    </>
  )
}

export default App;
