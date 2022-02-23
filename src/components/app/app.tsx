import React, { FunctionComponent } from 'react';
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import { Switch, Route, useLocation, useHistory, Router } from 'react-router-dom';
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
import { getUserData } from '../../services/actions/user-data';
import { getCookie } from '../../utils/utils';
import { IngredientPage } from '../../pages/ingredient-page';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { CLICK_ON_CLOSE_BUTTON } from '../../services/constants';



const App: FunctionComponent = () => {
  const history = useHistory()
  const location = useLocation<{ [key in any]: any }>();
  //const isPush = history.action === 'PUSH';
  //const isPull = history.action === 'POP'
  let background =  location.state && location.state.background;


  const dispatch = useDispatch();
  const { dataRequest } = useSelector(store => store.burgerData)
  const { resetAnswer, userName } = useSelector(store => store.userState)
  const { currentItem } = useSelector(state => state.currentSelect)
  console.log(!!background)


  const token = getCookie('token')

  React.useEffect(() => {
    dispatch(getBurgerData());

  }, [dispatch])

  React.useEffect(() => {
   dispatch(getUserData(token));
  }, [])

  return (
    dataRequest ?
      (<Preloader />)
      :
      (<>
        <AppHeader />

          <main className={styles.app}>
            <Switch location={location || background } >
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
              <Route path='/reset-password' exact={true}>
                <ResetPage />
              </Route>
              <ProtectedRoute path='/profile' redirectPath='/login' check={userName}>
                <ProfilePage />
              </ProtectedRoute>
            <Route path='/ingredients/:id' >
            <IngredientPage/>
              </Route>
              <Route>
                <div>
                  <h1>Empty Page</h1>
                </div>
            </Route>
            </Switch>

          {!background && <Route path='/ingredients/:id' >

            <Modal headerText={'Детали ингридиента'} modalStyles={`text text_type_main-large`} modalHeaderStyles={`${styles.modal__header} mt-10 mr-10 ml-10`} closeModal={() => { dispatch({ type: CLICK_ON_CLOSE_BUTTON }) }}><IngredientDetails {...currentItem} /></Modal>


          </Route>}
            </main>

      </>)
  )
}

export default App;

