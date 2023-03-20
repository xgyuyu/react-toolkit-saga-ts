import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = (props: RouteProps) => {
  // 判断是否登录，未登录就去登录页面
  // const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  // if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};
