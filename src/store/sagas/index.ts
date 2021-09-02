import { all, fork } from "@redux-saga/core/effects";
import todoSaga from "./todos";

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
