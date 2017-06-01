function loadpage()
{
	var pageLoaded = document.getElementById('load');
	pageLoaded.style.opacity="1";
	pageLoaded.style.transition="4000ms all ease";
}



function jokeme(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Here the callback gets implemented
                object = JSON.parse(xhr.responseText);
                callback();
            } else {

            }
        }
    };

    xhr.open('GET','http://api.icndb.com/jokes/random', true);
    xhr.send();
    return xhr.onreadystatechange();
    console.log(xhr);
}
	



/*function loadJSON(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                object = JSON.parse(xhr.responseText);
                callback();
            } else {

            }
        }
    };

    xhr.open("GET", path, true);
    xhr.send();
    return xhr.onreadystatechange();
}*/