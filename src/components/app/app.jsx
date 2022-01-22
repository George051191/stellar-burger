import React from 'react';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { useDispatch } from 'react-redux';
import { getBurgerData } from '../../services/actions/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Preloader } from '../preloader/preloader';
import { useSelector } from 'react-redux';
import { BURGER_DATA_REQUEST } from '../../services/actions/burger-ingredients'


function App() {
  const dispatch = useDispatch();
  const { dataRequest } = useSelector(store => store.burgerData);


  React.useEffect(() => {
    dispatch({ type: BURGER_DATA_REQUEST })
  }, [dispatch])

  return (
    dataRequest ?
      (<Preloader />)
      :
      (<>
        <AppHeader />
        <main className={styles.app}>
          <section className={styles.app__constructor}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </section>
        </main>
      </>)
  )
}

export default App;
