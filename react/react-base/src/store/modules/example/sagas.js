import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotoesSuccess());
  } catch {
    toast.error('Deu error.');
    yield put(actions.clicaBotoesFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
