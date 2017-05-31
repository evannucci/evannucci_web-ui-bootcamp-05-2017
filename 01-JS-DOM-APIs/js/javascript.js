function loadpage()
{
	var pageLoaded = document.getElementById('load');
	pageLoaded.style.opacity="1";
	pageLoaded.style.transition="4000ms all ease";
}

function clickme()
{
	alert("Ouch, You clicked me!");

}


/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("joke").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
xhttp.send();*/



function jokeFunction(){
	var req = new XMLHttpRequest();
		req.open('GET', 'http://api.icndb.com/jokes/random/', true);
		document.getElementById("joke").innerHTML = req.responseText;
		console.log(req.responseText);
}