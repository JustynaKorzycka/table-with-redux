const costumerTable = (state = {data: [], page:1, limit:3, sortBy: ''}, action) => {
  switch (action.type) {
    case 'FETCH_COSTUMER _SUCCESS':
      state.data = action.payload;
      return state;
    case 'LOG_OUT':
      state = {
        data: [], page: 1, limit: 3, sortBy: ''
      };
      return state;
    case 'CHANGE_TABLE_PAGE':
      if (state.page <= 1 && action.payload === -1) state.page = 1;
      else state.page =  state.page + action.payload
      return state;
    default:
      return state;
  }
}
export default costumerTable