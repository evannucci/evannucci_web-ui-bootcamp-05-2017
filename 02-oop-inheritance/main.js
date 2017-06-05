import Actor from './js/actor.js';
import EventEmitter from './js/emitter,js';
import Logger from './js/logger.js';
import Movie from './js/movie.js';

'use strict';

const social = {

	share: function (name){
		console.log(name, "share", this.name);
	},

	like: function (name){
		console.log(name, "likes", this.name);
	}
}

/*Exercise 3*/

const fightClub = new Movie ("Fight Club", "199", "139");
const edward = new Actor ("Edward Norton", "48");
const actors = [
	new Actor("Brad Pitt", "54"),
	new Actor("Meat Loaf", "70")
	];
const logger = new Logger();

fightClub.on('play', logger.log);
fightClub.addCast(edward);
fightClub.addCast(actors);

Object.assign(fightClub, social);

fightClub.share("Ezequiel");
fightClub.like("Ezequiel");
fightClub.play();
//console.log(fightClub);

