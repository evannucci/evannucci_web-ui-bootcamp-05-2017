function loadPage()
{
	var pageLoaded = document.getElementById('load');
	pageLoaded.style.opacity="1";
	pageLoaded.style.transition="4000ms all ease";
}




function jokeMe(config)
{
    let config = {
    methodType: 'GET',
    responseType: 'JSON',
    url: 'http://api.icndb.com/jokes/random'
}
    let promiseObj = new Promise(function(resolve, reject)
    {        
      
        let xhr = new XMLHttpRequest();
        xhr.open(config.methodType, config.url, true);
        xhr.responseType = config.responseType;

        xhr.addEventListener('load', function(response)
        {
            if (response.currentTarget.status === 200)
            {
                resolve(response.currentTarget.response.value.joke);
            }
            else
            {
                reject('Fail Request');
            }
        });
            xhr.send(null);
    }
        return promise;
}



