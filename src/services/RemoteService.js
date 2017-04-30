import axios from 'axios'
import cs from './CommunicationService'
function _RemoteService(){
	this.fetch = (type, fieldName, url) => {
		return axios.get(url).then(function(res){
			  if (res.status >= 400) {
		          throw new Error("Bad response from server");
		      }
			  if (type!=null) {
				  let action = {'type':type};
			      action[fieldName] = res.data;
				  cs.store.dispatch(action);
			  }
		      
			  return res;
		  });
	}
	
  }
const RemoteService = new _RemoteService();
export default RemoteService;