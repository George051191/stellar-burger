import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './app-header.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { MenuItem } from "../menu-item/menu-item";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ILocation } from "../../utils/interfaces";

export const AppHeader: FunctionComponent = () => {
  const location = useLocation<ILocation>();


  const isActivePage = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__navigation}>
        <ul className={headerStyles.header__list}>
          <NavLink to='/' className={(() => isActivePage('/') ? `${headerStyles.activenavlink} text text_type_main-default` : `text text_type_main-default text_color_inactive ${headerStyles.navlink}`)}>
            <MenuItem text='Конструктор' textStyles={'ml-2'} styles={`${headerStyles.header__item} pl-5 pr-5`}>
              <BurgerIcon type='primary' />
            </MenuItem>
          </NavLink>
          <NavLink to='/login' className={(() => isActivePage('/login') ? `${headerStyles.activenavlink} text text_type_main-default` : `text text_type_main-default text_color_inactive ${headerStyles.navlink}`)}>
            <MenuItem text='Лента заказов' textStyles={' ml-2'} styles={`${headerStyles.header__item} pl-5 pr-5`}>
              <ListIcon type='secondary' />
            </MenuItem>
          </NavLink>
          <MenuItem styles={headerStyles.header__logo}>
            <Logo />
          </MenuItem>
          <NavLink to='/jjj' className={(() => isActivePage('/jjj') ? `${headerStyles.activenavlink} text text_type_main-default` : `text text_type_main-default text_color_inactive ${headerStyles.navlink}`)}>
            <MenuItem text='Личный кабинет' textStyles={' ml-2'} styles={`${headerStyles.header__item} pl-5 pr-5`}>
              <ProfileIcon type='secondary' />
            </MenuItem>
          </NavLink>
        </ul>
      </nav>
    </header>

  )
}



