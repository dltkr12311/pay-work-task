import { MODAL } from "store/actions/types";
import { ModalsAction } from "../actions/modal";

interface ModalState {
  showModal: boolean;
}

const initialState: ModalState = {
  showModal: false,
};

function modals(state: ModalState = initialState, action: ModalsAction) {
  switch (action.type) {
    case MODAL.SHOW:
      return {
        showModal: true,
      };
    case MODAL.CLOSE:
      return {
        showModal: false,
      };
    default:
      return state;
  }
}

export default modals;
