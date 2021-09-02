import shortid from "shortid";
import { all, delay, put, takeLatest, fork } from "redux-saga/effects";

import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
} from "../actions/types";
import { currentDate } from "utils/date";

export function* fetchTodos() {
  try {
    yield delay(1000);
    yield put({
      type: FETCH_TODOS.SUCCESS,
    });
  } catch (err) {
    yield put({
      type: FETCH_TODOS.FAILURE,
      error: err.response.data,
    });
  }
}

function* addTodo({ payload }) {
  const { id, content, createdAt } = payload;
  try {
    yield delay(1000);

    yield put({
      type: ADD_TODO.SUCCESS,
      payload: { id, content, createdAt },
    });
  } catch (err) {
    yield put({
      type: ADD_TODO.FAILURE,
      error: err.response.data,
    });
  }
}

function* updateTodo({ payload }) {
  try {
    yield delay(500);
    yield put({
      type: UPDATE_TODO.SUCCESS,
      todoList: {
        id: payload.id,
        content: payload.data,
      },
    });
  } catch (err) {
    yield put({
      type: UPDATE_TODO.FAILURE,
      error: err.response.data,
    });
  }
}

function* removeTodo({ payload }) {
  try {
    yield put({
      type: REMOVE_TODO.SUCCESS,
      payload: payload.id,
    });
  } catch (err) {
    yield put({
      type: REMOVE_TODO.FAILURE,
      error: err.response.data,
    });
  }
}

function* checkTodo({ payload }) {
  const { id, isCheck } = payload;
  try {
    yield put({
      type: CHECK_TODO.SUCCESS,
      payload: { id, isCheck },
    });
  } catch (err) {
    yield put({
      type: CHECK_TODO.FAILURE,
      error: err.response.data,
    });
  }
}

function* watchFetchTodos() {
  yield takeLatest(FETCH_TODOS.REQUEST, fetchTodos);
}
function* watchAddTodo() {
  yield takeLatest<any>(ADD_TODO.REQUEST, addTodo);
}

function* watchUpdateTodo() {
  yield takeLatest<any>(UPDATE_TODO.REQUEST, updateTodo);
}

function* watchRemoveTodo() {
  yield takeLatest<any>(REMOVE_TODO.REQUEST, removeTodo);
}

function* watchCheckTodo() {
  yield takeLatest<any>(CHECK_TODO.REQUEST, checkTodo);
}

export default function* todoSaga() {
  yield all([
    fork(watchFetchTodos),
    fork(watchAddTodo),
    fork(watchUpdateTodo),
    fork(watchRemoveTodo),
    fork(watchCheckTodo),
  ]);
}
