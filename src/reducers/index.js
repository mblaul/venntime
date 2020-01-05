const initialState = {
  isAuthenticated: false,
  isLoginPending: false,
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
    default: {
      return state;
    }
  }
};
