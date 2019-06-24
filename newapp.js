$(document).ready(function () {
    //make array of strings 

    var topics = ["cars", "music", "tv", "love", "cats"];

    //make loop to append a button or each string in array

    var createBtn = function () {
        //erasing anything in here so that it doesn't duplicate the results
        $("#buttonarea").empty();

        for (var i = 0; i < topics.length; i++) {
            console.log(topics);

            var newButton = $("<button>");
            // newButton.addClass(classToAdd);
            newButton.attr("data-type", topics[i]);
            newButton.text(topics[i]);
            $("#buttonarea").append(newButton);
            console.log(i);
        }
    }
    createBtn();

    //api call
    $(document).on("click", ".car-button", function () {

        var x = $(this).data("search");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x +
            "&api_key=OAxCpgRbH01y0d1oR0AskyTeNu6pcWk3&limit=10";
        //ajax call from giphy
        $.ajax({
            url: queryURL,
            method: "GET"
            // After the data from the AJAX request comes back
        }).then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                $("#gif-area").prepend("<p>Rating: " + response.data[i].rating + "</p>");
                //append image
                $("#gif-area").prepend("<img src=' " + response.data[i].images.downsized.url + " '>");
            }
        })
    })
})