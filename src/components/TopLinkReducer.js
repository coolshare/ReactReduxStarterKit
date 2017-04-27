	const TopLinkReducer = (state = {'currentLink':'main'}, action) => {
	  switch (action.type) {
	    case 'switchTopLink':
	      return Object.assign({}, state, {
	    	  currentLink: action.id
	      })
	    default:
	      return state
	  }
	}
	
	export default TopLinkReducer