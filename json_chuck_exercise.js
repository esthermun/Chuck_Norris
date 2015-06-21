

// Don't worry about what's going on here!
function getJoke(cb) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState != 4 || (req.status !=200 && req.status != 304)) return;
        cb(req.responseText);
	}
	req.open("GET", "http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]");req.send();
}
// --------------------------------------

getJoke(function(res) {
    var joke = res; 
    
    // your code here - what is 'res'?
    //parse JSON data and display it
    var chuckData = JSON.parse(res);
    console.log(chuckData.value.joke);
    
});
