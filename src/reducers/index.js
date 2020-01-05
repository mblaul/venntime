const initialState = {
  isAuthenticated: false,
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': {
      const { user } = action;
      return {
        ...state,
        user,
        isAuthenticated: true,
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
