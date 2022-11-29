import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClose, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // se a rota for fechada 'isClose' e o 'isLoggedIn' não estiver logado, vai redirecionar para a pagina login.
  if (isClose && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClose: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClose: PropTypes.bool,
};
