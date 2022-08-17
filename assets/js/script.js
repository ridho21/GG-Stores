var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "0c9e5e3e97msh2fc6a07adf9fe5fp1f9378jsn329126692d94"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	var game=response.results
	$.each(game,function(i,data){
        $('#list-game').append('<a href="Details.html" id="'+data.id+'" class="text-decoration-none"><div class="col p-2 btn-outline-success text-light"><img src="'+data.background_image+'" class="p-1" width="300px" height="200px"><h5 class="mt-1">'+data.name+'</h5><p>Rating : '+data.rating+'</p><p>Released : '+data.released+'</p><button type="button" class="btn btn-outline-success btn-block">More Details</button></div></a>')
	})
});