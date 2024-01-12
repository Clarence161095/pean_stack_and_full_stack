import { errorAction, loadAction, loadedAction, loadingAction } from "./action";

export function announcementReducer(state, action) {
  switch (action.type) {
    case loadAction.type: {
      return { ...state, type: action.type };
    }
    case loadingAction.type: {
      return { ...state, type: action.type, loading: true };
    }
    case loadedAction.type: {
      return { ...state, type: action.type, loading: false, list: action.payload };
    }
    case errorAction.type: {
      return { ...state, type: action.type, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
}
