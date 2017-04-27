const MapContainerReducer = (state = {'currentMap':'GoogleMap'}, action) => {
  switch (action.type) {
    case 'switchMap':
      return Object.assign({}, state, {
    	  currentMap: action.id
      })
    default:
      return state
  }
}

export default MapContainerReducer