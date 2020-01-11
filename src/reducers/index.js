const initialState = {
  isAuthenticated: false,
  isLoginPending: false,
  isModalOpen: false,
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_PENDING': {
      return {
        ...state,
        isLoginPending: true,
      };
    }
    case 'LOGIN_USER': {
      const { user } = action;
      return {
        ...state,
        user,
        isAuthenticated: true,
        isLoginPending: false,
      };
    }
    case 'LOGOUT_USER': {
      return initialState;
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
