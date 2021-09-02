import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
} from "../actions/types";
import { TodosAction } from "store/actions/todos";
import data from "utils/data.json";
import { TodoTypes } from "components";

export interface TodoListStatus {
  todoList: TodoTypes[];
  todoLoading?: boolean;
  todoError?: boolean | null;
  todoDone?: boolean;
}

const initialState: TodoListStatus = {
  todoList: [...data.todoList],
  todoLoading: true,
  todoError: null,
  todoDone: false,
};

function todos(state: TodoListStatus = initialState, action: TodosAction) {
  switch (action.type) {
    case FETCH_TODOS.REQUEST:
      return {
        todoLoading: true,
        todoError: null,
        todoDone: false,
      };

    case FETCH_TODOS.SUCCESS:
      return {
        ...state,
        todoLoading: false,
        todoDone: true,
        todoList: [...state.todoList],
      };
    case FETCH_TODOS.FAILURE:
      return {
        todoLoding: false,
        todoError: action.payload.error,
      };
    case ADD_TODO.REQUEST:
      return {
        todoLoading: true,
        todoError: null,
        todoDone: false,
      };

    case ADD_TODO.SUCCESS:
      return {
        ...state,
        todoLoading: false,
        todoDone: true,
        todoList: [action.payload, ...state.todoList],
      };

    case ADD_TODO.FAILURE:
      return {
        todoLoading: false,
        todoError: action.payload.error,
      };

    case UPDATE_TODO.REQUEST:
      return {
        todoLoading: true,
        todoError: null,
        todoDone: false,
      };

    case UPDATE_TODO.SUCCESS:
      return {
        ...state,
        todoLoading: false,
        todoDone: true,
        todoList: state.todoList.map((todo) => {
          todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo;
        }),
      };

    case UPDATE_TODO.FAILURE:
      return {
        todoLoading: false,
        todoError: action.payload.error,
      };

    case REMOVE_TODO.REQUEST:
      return {
        todoLoading: true,
        todoError: null,
        todoDone: false,
      };

    case REMOVE_TODO.SUCCESS:
      return {
        ...state,
        todoLoading: false,
        todoDone: true,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case REMOVE_TODO.FAILURE:
      return {
        todoLoading: false,
        todoError: action.payload.error,
      };

    case CHECK_TODO.REQUEST:
      return {
        todoLoading: true,
        todoError: null,
        todoDone: false,
      };

    case CHECK_TODO.SUCCESS:
      return {
        ...state,
        todoLoading: false,
        todoDone: true,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? { isCheck: !todo.isCheck } : todo
        ),
      };

    case CHECK_TODO.FAILURE:
      return {
        todoLoading: false,
        todoError: action.payload.error,
      };
    default:
      return { ...state.todoList };
  }
}

export default todos;
