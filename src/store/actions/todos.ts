import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
} from "./types";

//불러오기
export const fetchTodos = () => ({ type: FETCH_TODOS.REQUEST });
export const featchTodosSuccess = () => ({ type: FETCH_TODOS.SUCCESS });
export const featchTodosFailure = (error: string) => ({
  type: FETCH_TODOS.FAILURE,
  payload: { error },
});

//추가
export const addTodo = (id, content, createdAt) => ({
  type: ADD_TODO.REQUEST,
  payload: { id, content, createdAt },
});
export const addTodoSuccess = (
  id: string,
  content: string,
  check: boolean,
  date: string
) => ({
  type: ADD_TODO.SUCCESS,
  payload: { id, content, isCheck: check, createdAt: date },
});
export const addTodoFailure = (error: string) => ({
  type: ADD_TODO.FAILURE,
  payload: { error },
});

//체크 완료
export const checkTodo = (id, isCheck) => ({
  type: CHECK_TODO.REQUEST,
  payload: { id, isCheck },
});
export const checkTodoSuccess = ({ id, isCheck }) => ({
  type: CHECK_TODO.SUCCESS,
  payload: { id, isCheck },
});
export const checkTodoFailure = (error: string) => ({
  type: CHECK_TODO.FAILURE,
  payload: { error },
});

//업데이트
export const updateTodo = () => ({ type: UPDATE_TODO.REQUEST });
export const updateTodoSuccess = (id: string, content: string) => ({
  type: UPDATE_TODO.SUCCESS,
  payload: { id, content },
});
export const updateTodoFailure = (error: string) => ({
  type: UPDATE_TODO.FAILURE,
  payload: { error },
});

//삭제
export const removeTodo = (id: string) => ({
  type: REMOVE_TODO.REQUEST,
  payload: { id },
});
export const removeTodoSuccess = (id: string) => ({
  type: REMOVE_TODO.SUCCESS,
  payload: { id },
});
export const removeTodoFailure = (error: string) => ({
  type: REMOVE_TODO.FAILURE,
  payload: { error },
});

export type TodosAction =
  | ReturnType<typeof fetchTodos>
  | ReturnType<typeof featchTodosSuccess>
  | ReturnType<typeof featchTodosFailure>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof addTodoSuccess>
  | ReturnType<typeof addTodoFailure>
  | ReturnType<typeof checkTodo>
  | ReturnType<typeof checkTodoSuccess>
  | ReturnType<typeof checkTodoFailure>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof updateTodoSuccess>
  | ReturnType<typeof updateTodoFailure>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof removeTodoSuccess>
  | ReturnType<typeof removeTodoFailure>;
