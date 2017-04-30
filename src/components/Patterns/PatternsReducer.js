const PatternsReducer = (state = {'currentTab':0}, action) => {
  switch (action.type) {
    case 'switchTab':
      return Object.assign({}, state, {
    	  currentTab: action.tabId
      })
    default:
      return state
  }
}

export default mainContainerReducer