const mainContainerReducer = (state = {'data':[]}, action) => {
  switch (action.type) {
    case 'LoadHousing':
      return Object.assign({}, state, {
    	  data: action.data
      })
    default:
      return state
  }
}

export default mainContainerReducer