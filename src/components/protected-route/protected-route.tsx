import { Route, Redirect } from "react-router-dom";
import React, { ReactNode, FunctionComponent } from "react";
import { IResetPageProps } from "../../utils/interfaces";
import { useSelector } from "../../services/types/hooks";
import Api from "../../utils/Api";


export const ProtectedRoute: FunctionComponent<IResetPageProps> = ({ path, children, redirectPath, check }) => {


  return (

    <Route path={path} exact={true} render={({ location }) => check ? (children) : <Redirect to={{
    pathname : redirectPath, state: {from:location}}
      } /> }/>


      )



}
