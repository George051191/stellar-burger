import React, { FunctionComponent } from "react";
import { PasswordInput, EmailInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './registration.module.css';

export const RegistrationPage:FunctionComponent = () => {
  const [value, setValue] = React.useState('bob@example.com')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.pagestyle}>
      <form className={styles.form}>
        <fieldset className={styles.inputsfield}>
          <h2 className={`text text_type_main-medium ${styles.header}`}>Регистрация</h2>
          <Input type='text' value={value} onChange={onChange} placeholder={'Name'} />
          <EmailInput onChange={onChange} value={value} name={'email'} />
          <PasswordInput onChange={onChange} value={value} name={'password'} />
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
