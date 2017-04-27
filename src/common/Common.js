export class GlobalManager {
	constructor() {
		this.varMap = {}
	}
	
	set(key, value) {
		this.varMap[key] = value;
	}
	get(key) {
		return this.varMap[key];
	}
	remove(key) {
		delete this.varMap[key];
	}
}
const gm = new GlobalManager();