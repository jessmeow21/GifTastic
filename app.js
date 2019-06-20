//gftastic js

//connect to giphy api
//ajax call and report response
//make buttons for html 
//input form for submissions and submit button

// $("button").on("click", function () {

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=OAxCpgRbH01y0d1oR0AskyTeNu6pcWk3&q=&limit=10";
// apikey = "OAxCpgRbH01y0d1oR0AskyTeNu6pcWk3",

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    //response successful
    console.log(response);









});

// })