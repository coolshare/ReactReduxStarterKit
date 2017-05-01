const PatternsRightPaneReducer = (state = {'currentVideo':{'id':'YxqXoSkVaJk','des':'Default video'}, 'videoSearch':'go pro', 'photoSearch':"tropical", 'loadPhotos':[],'videoItems':[],  'currentPage':'Photo Player'}, action) => {
  switch (action.type) {
    case 'loadPhotos':
        return Object.assign({}, state, {
      	  phtotoItems: action.items
        })
    case 'playVideo':
        return Object.assign({}, state, {
      	  currentVideo: action.item
        })
    case 'photoSearch':
        return Object.assign({}, state, {
        	photoSearch: action.search
        })
    case 'videoSearch':
        return Object.assign({}, state, {
        	videoSearch: action.search
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