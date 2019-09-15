var topics = ['soccer', 'coding', 'hacks', 'cats']

function displayGifsTastic() {

    var gif = $(this).attr("data-name");
    var xhr = "http://api.giphy.com/v1/gifs/search?q="+ gif + "&api_key=AQfJTW55t5y7xzZAZeU4fX67ohfKAtUW&limit=25";


    $.ajax({
        url: xhr,
        method: "GET"
    }).then(function (response) {

        var gifDiv = $('<div class="Gif">')

        var rating = response.rating;

        var displayRating = $("<p>").text("Rating: " + rating);

        gifDiv.append(displayRating);
    })

}
displayGifsTastic();