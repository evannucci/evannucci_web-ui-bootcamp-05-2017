import {EventEmitter} from './emitter';


class Movie extends EventEmmiter{
	constructor(name, year, duration){
		super();
		this.name = name;
		this.year = year;
		this.duration = duration;
		this.cast = [];
	}

	addCast(cast){
		this.cast = this.cast.concat(cast);
	}

	play(){
		this.emit('play')
	}

	pause(){
		this.emit('pause')
	}

	resume(){
		this.emit('resume')
	}
}
export default Movie;