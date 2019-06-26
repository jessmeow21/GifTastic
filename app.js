$(document).ready(function () {
    //create buttons based on strings in the array
    //when submit button is clicked
    //get the value of input in text box and add to the array
    //create the button for the input

    //topics array
    var topics = ["animals", "music", "comedy", "romance", "cats", "food", "gym", "batman"];

    //buttons for array
    function arrayButtons() {
        $("#gifButtonsArray").empty();

        for (let i = 0; i < topics.length; i++) {
            // console.log(topics);
            var addGifButton = $('<button class="button">');
            addGifButton.addClass("topics");
            addGifButton.attr("data-name", topics[i]);
            console.log(topics[i]);
            addGifButton.html(topics[i]);
            $("#gifButtonsArray").append(addGifButton);
        }
    }
    arrayButtons();

    function displayGif() {
        var x = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x +
            "&api_key=OAxCpgRbH01y0d1oR0AskyTeNu6pcWk3&limit=10";
        $.ajax({ url: queryURL, method: "GET" }).then(function (response) {
            console.log(response);
            //empty divs holding preious gifs
            $("#gifsHere").empty();

            for (let i = 0; i < response.data.length; i++) {
                //variables to add HTML elements
                var gifDiv = $('<div class="gifDiv">');
                var rating = response.data[i].rating;
                var ratingDiv = $('<p>').html("Rating: " + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var gifImg = $('<img class="gImage">');

                //defaulting gifs to still
                gifImg.attr('src', still);
                gifImg.attr('data-still', still);
                gifImg.attr('data-animate', animated);
                gifImg.attr('data-state', 'still')

                //gifs 
                gifDiv.append(ratingDiv);
                gifDiv.prepend(gifImg);
                $("#gifsHere").prepend(gifDiv);
            }
        });

        //on click function to animate and pause the gifs
        $("#gifsHere").on("click", ".gImage", function () {
            var state = $(this).attr('data-state');
            //if statement for state. If state is still, the on click will animate the gif
            if (state === 'still') {

            }
        })
    };
    $(document).on("click", ".topics", displayGif);
});

