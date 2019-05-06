import { put, takeLatest, all } from "redux-saga/effects";

function* addTodo(action) {
  yield put({ type: "ADD_TODO", todo: action.todo });
}

function* watchAddTodo() {
  yield takeLatest("CREATE_TODO", addTodo);
}

function* removeTodo(action) {
  yield put({ type: "REMOVE_TODO", id: action.id });
}

function* watchRemoveTodo() {
  yield takeLatest("DELETE_TODO", removeTodo);
}

function* completeTodo(action) {
  yield put({ type: "TASK_COMPLETE_TODO", data: action.data });
}

function* watchCompleteTodo() {
  yield takeLatest("COMPLETE_TODO", completeTodo);
}

function* completeAllTodo(action) {
  console.log("watchdog", action);
  yield put({ type: "TASK_COMPLETE_All_TODO", data: action.data });
}

function* watchCompleteAll() {
  yield takeLatest("COMPLETE_ALL", completeAllTodo);
}
export default function* todoSaga() {
  yield all([
    watchAddTodo(),
    watchRemoveTodo(),
    watchCompleteTodo(),
    watchCompleteAll()
  ]);
}
