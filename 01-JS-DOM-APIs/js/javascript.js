function loadPage()
{
	var pageLoaded = document.getElementById('load');
	pageLoaded.style.opacity="1";
	pageLoaded.style.transition="4000ms all ease";
}


function jokeMe(config)
{
    let promiseObj = new Promise(function(resolve, reject)
    {        
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                obj = JSON.parse(this.response);
                document.getElementById("load").innerHTML = obj.value.joke;
            }
            else
            {
               reject(xhr.status);
               console.log("xhr failed");
            }
        }
        xhr.open('GET','http://api.icndb.com/jokes/random', true);
        xhr.send();

        let config = {
            methodType: 'GET'
            responseType: 'JSON'
            url: 'http://api.icndb.com/jokes/random'
        }
    });
    return promiseObj;
}