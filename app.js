/////////////////////giftastic

//connect to giphy api
//ajax call and report response
//make buttons for html 
//input form for submissions and submit button
//topics array
//q, limit, and rating parameters 


//onclick function
$("#button").on("click", function () {
    var search = $(this).attr("cat-button");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=C6BXFZeCbeNMXSq2uaCAbt1f23BF0Qx6&limit=10";
    //ajax call from giphy
    $.ajax({
        // url: "https://api.giphy.com/v1/gifs/trending?api_key=OAxCpgRbH01y0d1oR0AskyTeNu6pcWk3",
        url: queryURL,
        method: "GET"
        // After the data from the AJAX request comes back

    }).then(function (response) {
        console.log(response);




    });


});



