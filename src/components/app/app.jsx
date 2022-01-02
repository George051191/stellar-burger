import React from 'react';
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { useDispatch } from 'react-redux';
import { getBurgerData } from '../../services/actions/burger-ingredients';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBurgerData());
  }, [])

  return (
    <>
      <AppHeader />
      <main className={styles.app}>
        <section className={styles.app__constructor}>
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </main>
    </>
  )
}


export default App;
