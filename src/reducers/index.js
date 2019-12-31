export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH': {
      return {
        ...state,
        auth: action.auth,
      };
    }
    default: {
      return state;
    }
  }
};
