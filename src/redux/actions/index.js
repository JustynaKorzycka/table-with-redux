export const logiIn = () => ({
  type: 'LOG_IN'
})

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const costumerFetching = (costumer) => ({
  type: 'FETCH_COSTUMER _SUCCESS', 
  payload: costumer
})

export const changePage = (page) => ({
  type: 'CHANGE_TABLE_PAGE',
  payload: page
})