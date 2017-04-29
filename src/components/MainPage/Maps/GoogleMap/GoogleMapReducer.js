const GoogleMapReducer = (state = {'busRoutes':[]}, action) => {
  switch (action.type) {
    case 'GoogleMap':
      return Object.assign({}, state, {
    	  busRoutes: action.busRoutes
      })
    default:
      return state
  }
}

export default GoogleMapReducer