function loadPage()
{
	var pageLoaded = document.getElementById('load');
	pageLoaded.style.opacity="1";
	pageLoaded.style.transition="4000ms all ease";
}

 //Exercise 3
function one (){

(function() {
    'use strict';
    function promiseJoke(config) {
        let promise = new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open(config.methodType, config.url, true);
            request.responseType = config.responseType;
            request.addEventListener('load', function(response) {
                if (response.currentTarget.status === 200) {
                    resolve(response.currentTarget.response.value.joke);
                } else {
                    let turnred = document.getElementById('joke');
                    turnred.color = "#FF0000";
                    reject('Bad request');
                }
            });
            request.send(null);
        });
        return promise;
    };

    function addJoke(joke, text) {
        let e = document.getElementById('joke');
        e.innerHTML = text;
    }
    let config = {
        methodType: 'GET',
        responseType: 'json',
        url: 'http://api.icndb.com/jokes/random'
    };

    promiseJoke(config).then(
        // promise ok
        function(response) {
            console.log('OK => ', response);
            addJoke('target', response);
        },
        // promise bad
        function(response) {
            console.log('BAD => ', response);
        }
    );
}) ();

}




function createTable(){

const matrix = [
    ["Jhon Jackson", "21 years"],
    ["Jack Jhonson", "31 years"],
    ["Peter White", "55 years"],
    ["Walter Red", "33 years"]
];

var newTable = document.createElemente("table")
for (i=0 ; i<matrix.length ; i++){

}
   
}


