import React, { FunctionComponent } from 'react';
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from '../../services/types/hooks';
import { getBurgerData } from '../../services/actions/burger-ingredients';
import { Constructor } from '../../pages/burger-constructor-page';
import { LoginPage } from '../../pages/login-page';
import { RegistrationPage } from '../../pages/registration';
import { RecoveryPage } from '../../pages/recovery';
import { ResetPage } from '../../pages/reset';
import { ProfilePage } from '../../pages/profile';
import { Preloader } from '../preloader/preloader';
import { useSelector } from '../../services/types/hooks';
import { ProtectedRoute } from '../protected-route/protected-route';


const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { dataRequest } = useSelector(store => store.burgerData)
  const { resetAnswer } = useSelector(store => store.userState)

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
            <Route path='/forgot-password' exact={true}>
              <RecoveryPage />
            </Route>
            <ProtectedRoute path='/reset-password' redirectPath='/login' currentUserStatus={resetAnswer} >
              <ResetPage />
            </ProtectedRoute>
            <Route path='/profile' exact={true}>
              <ProfilePage />
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

