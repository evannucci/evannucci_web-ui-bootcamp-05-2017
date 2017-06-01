function loadpage()
{
	var pageLoaded = document.getElementById('load');
	pageLoaded.style.opacity="1";
	pageLoaded.style.transition="4000ms all ease";
}


/*
function jokeme() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://api.icndb.com/jokes/random', true);
    xhr.send();
    console.log(xhr);
    let e = JSON.parse(this.responseText);
    console.log(e);
}
*/
function jokeme(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            obj = JSON.parse(this.response);
            console.log(obj);
            console.log(obj.value.joke);
             document.getElementById("load").innerHTML = obj.value.joke;
        }
    }
    xhr.open('GET','http://api.icndb.com/jokes/random', true);
    xhr.send();

}