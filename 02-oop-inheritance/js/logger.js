class Logger{
	constructor(){
	}

	log(info){
		let msg = info + "event has been emitted";
		console.log(msg);
	}
}
export default Logger;