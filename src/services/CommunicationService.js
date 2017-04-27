class CommunicationService {

	init(store) {	
		this.store = store;
	}
	
	dispatch(action) {
		this.store.dispatch(action);
	}
	subscribe(listener) {
		this.store.subscribe(listener);
	}
	registerGlobal(key, obj) {
		window[key] = obj;
	}
	
}

const cs = new CommunicationService();
export default cs;