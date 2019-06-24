// /////////////////////giftastic

// //connect to giphy api
// //ajax call and report response
// //make buttons for html 
// //input form for submissions and submit button
// //topics array
// //q, limit, and rating parameters 
// $(document).ready(function () {


//     //pulls 10 images from giphy
//     //click to start and stop gif 
//     //array of topics, loop over array and created buttons for them each
//     //function to add submissions from form to the array
//     var carModels = ["cars", "toyota", "bmw", "batmobile", "honda"];
//     //take topics in array and create buttons in html
//     //by using a loop to append a button for each string in the array

//     //function to make buttons and add to page
//     function carButtons(arrayToUse, classToAdd, areaToAddTo) {
//         // $(areaToAddTo).empty();

//         for (var i = 0; i < arrayToUse.length; i++) {
//             console.log(arrayToUse);
//             var carButton = $("<button>");
//             carButton.addClass(classToAdd);
//             carButton.attr("data-type", arrayToUse[i]);
//             carButton.text(arrayToUse[i]);
//             $(areaToAddTo).append(carButton);
//         }
//     }
//     carButtons();



// $(document).on("click", function () {
//     var x = $(this).data("search");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x +
//         "&api_key=OAxCpgRbH01y0d1oR0AskyTeNu6pcWk3&limit=10";
//     //ajax call from giphy
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//         // After the data from the AJAX request comes back
//     }).then(function (response) {
//         for (let i = 0; i < response.data.length; i++) {
//             $("#gif-area").prepend("<p>Rating: " + response.data[i].rating + "</p>");
//             //append image
//             $("#gif-area").prepend("<img src=' " + response.data[i].images.downsized.url + " '>");
//         }
//     })
// })


// });


