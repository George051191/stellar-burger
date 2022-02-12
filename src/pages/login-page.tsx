import React, { FunctionComponent } from "react";
import { PasswordInput, EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './login-page.module.css';


export const LoginPage: FunctionComponent = () => {
  const [value, setValue] = React.useState('bob@example.com')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.pagestyle}>
      <form className={styles.form}>
        <fieldset className={styles.inputsfield}>
          <h2 className={`text text_type_main-medium ${styles.header}`}>Вход</h2>
          <EmailInput onChange={onChange} value={value} name={'email'} />
          <PasswordInput onChange={onChange} value={value} name={'password'} />
        </fieldset>
        <Button type="primary" size="medium" >Войти</Button>
        <div className={`${styles.redirectmenu} mb-4 mt-20`}>
          <p className={`${styles.registration} text text_type_main-default text_color_inactive `}>Вы — новый пользователь?</p>
          <Link className={`${styles.link} text text_type_main-default`} to='/register'>Зарегистрироваться</Link>
        </div>
        <div className={styles.redirectmenu}>
          <p className={`${styles.password} text text_type_main-default text_color_inactive `}>Забыли пароль?</p>
          <Link className={`${styles.link} text text_type_main-default`} to='/forgot-password'>Восстановить пароль</Link>
        </div>
      </form>

    </div>
  )
}
