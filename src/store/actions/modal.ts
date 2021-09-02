import { MODAL } from "./types";

export const showModal = () => ({ type: MODAL.SHOW });

export const closeModal = () => ({ type: MODAL.CLOSE });

// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.
export type ModalsAction =
  | ReturnType<typeof showModal>
  | ReturnType<typeof closeModal>;
