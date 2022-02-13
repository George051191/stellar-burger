import React, { FunctionComponent } from 'react';
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from '../../services/types/hooks';
import { getBurgerData } from '../../services/actions/burger-ingredients';
import { Constructor } from '../../pages/burger-constructor-page';
import { LoginPage } from '../../pages/login-page';
import { RegistrationPage } from '../../pages/registration';
import { Preloader } from '../preloader/preloader';
import { useSelector } from '../../services/types/hooks';


const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { dataRequest } = useSelector(store => store.burgerData)
  React.useEffect(() => {
    dispatch(getBurgerData());
  }, [dispatch])


  return (
    dataRequest ?
      (<Preloader />)
      :
      (<>
        <AppHeader />
        <main className={styles.app}>
          <Switch>
            <Route path='/' exact={true}>
              <Constructor />
            </Route>
            <Route path='/login' exact={true}>
              <LoginPage />
            </Route>
            <Route path='/register' exact={true}>
              <RegistrationPage />
            </Route>
            <Route>
              <div>
                <h1>Empty Page</h1>
              </div>
            </Route>
          </Switch>

        </main>
      </>)
  )
}

export default App;
