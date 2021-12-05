import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './app-header.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { MenuItem } from "../menu-item/menu-item";

export function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navigation}>
        <ul className={headerStyles.list}>
          <MenuItem text='Конструктор'>
            <BurgerIcon />
          </MenuItem>
          <MenuItem text='Лента заказов'>
            <ListIcon />
          </MenuItem>
          <li className={headerStyles.navigation__logo}>
            <Logo />
          </li>
          <MenuItem text='Личный кабинет'>
            <ProfileIcon />
          </MenuItem>
        </ul>
      </nav>
    </header>

  )
}