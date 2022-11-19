import * as types from '../types';

export function clicaBotoesRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}
export function clicaBotoesSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}
export function clicaBotoesFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
