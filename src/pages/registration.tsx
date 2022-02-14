import React, { FunctionComponent } from "react";
import { PasswordInput, EmailInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './registration.module.css';
import { createUser } from "../services/actions/user-data";
import { useSelector, useDispatch } from "../services/types/hooks";

export const RegistrationPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector(state => state.userState)
  console.log(userEmail)
  const [nameInputValue, setNameInput] = React.useState('');
  const [emailInputValue, setEmailInput] = React.useState('');
  const [passwordInputValue, setPasswordInput] = React.useState('');
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const newUserCreating = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(createUser(emailInputValue, passwordInputValue, nameInputValue,))
    setNameInput('');
    setEmailInput('');
    setPasswordInput('');
  }

  return (
    <div className={styles.pagestyle}>
      <form className={styles.form} onSubmit={(evt) => newUserCreating(evt)}>
        <fieldset className={styles.inputsfield}>
          <h2 className={`text text_type_main-medium ${styles.header}`}>Регистрация</h2>
          <Input type='text' value={nameInputValue} onChange={onNameChange} placeholder={'Name'} />
          <EmailInput onChange={onEmailChange} value={emailInputValue} name={'email'} />
          <PasswordInput onChange={onPasswordChange} value={passwordInputValue} name={'password'} />
        </fieldset>
        <Button type="primary" size="medium" >Зарегистрироваться</Button>
        <div className={`${styles.redirectmenu}  mt-20`}>
          <p className={`${styles.registration} text text_type_main-default text_color_inactive `}>Уже зарегистрированы?</p>
          <Link className={`${styles.link} text text_type_main-default`} to='/login'>Войти</Link>
        </div>
      </form>
    </div>
  )
}
