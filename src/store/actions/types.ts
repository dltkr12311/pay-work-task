//todo item 불러오기
export const FETCH_TODOS = {
  REQUEST: "FETCH_TODOS_REQUEST" as const,
  SUCCESS: "FETCH_TODOS_SUCCESS" as const,
  FAILURE: "RETCH_TODOS_FAILURE" as const,
};

//todo item 생성
export const ADD_TODO = {
  REQUEST: "ADD_TODO_REQUEST" as const,
  SUCCESS: "ADD_TODO_SUCCESS" as const,
  FAILURE: "ADD_TODO_FAILURE" as const,
};

//todo item 수정
export const UPDATE_TODO = {
  REQUEST: "UPDATE_TODO_REQUEST" as const,
  SUCCESS: "UPDATE_TODO_SUCCESS" as const,
  FAILURE: "UPDATE_TODO_FAILURE" as const,
};

export const REMOVE_TODO = {
  REQUEST: "REMOVE_TODO_REQUEST" as const,
  SUCCESS: "REMOVE_TODO_SUCCESS" as const,
  FAILURE: "REMOVE_TODO_FAILURE" as const,
};

//todo item 완료
export const CHECK_TODO = {
  REQUEST: "CHECK_TODO_REQUEST" as const,
  SUCCESS: "CHECK_TODO_SUCCESS" as const,
  FAILURE: "CHECK_TODO_FAILURE" as const,
};

//show modal
export const MODAL = {
  SHOW: "SHOW_MODAL" as const,
  CLOSE: "CLOSE_MODAL" as const,
};
//as const는 const assertopns라는 typeScript 문법이다 이를 사용하게 되면 타입이 string이 되지 않고 실제값을 기르키게 된다.
