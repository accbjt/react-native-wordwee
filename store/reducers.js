export const youtube = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CARDS':
      return action.data;
    case 'ADD_CARD':
      return [action.data, ...state];
    default:
      return state;
  }
};
