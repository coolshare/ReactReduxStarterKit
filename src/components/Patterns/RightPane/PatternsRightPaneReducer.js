const PatternsRightPaneReducer = (state = {'search':"tropical", 'items':[], 'currentPage':'Photo List'}, action) => {
  switch (action.type) {
    case 'loadPhotos':
        return Object.assign({}, state, {
      	  items: action.items
        })
    case 'search':
        return Object.assign({}, state, {
      	  search: action.search
        })
    case 'switchPage':
        return Object.assign({}, state, {
        	currentPage: action.id
        })
    default:
      return state
  }
}

export default PatternsRightPaneReducer