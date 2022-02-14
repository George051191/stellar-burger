import { Route, Redirect} from "react-router-dom";
import React, { ReactNode, FunctionComponent } from "react";
import { IResetPageProps } from "../../utils/interfaces";

export const ProtectedRoute: FunctionComponent<IResetPageProps> = ({  path, redirectPath, currentUserStatus, children} ) => {


  return (
    <Route path={path} render={() => currentUserStatus ? (children) : (<Redirect to={redirectPath}/>)}/>


      )



}
