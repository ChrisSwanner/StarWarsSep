import $ from 'jquery';
const GiphyKey = process.env.GIPHY_KEY
function RandomGif() {
  let num = Math.floor(Math.random() * 5);
  return num;
}

export function SearchFactsAndGifsAjax(DisplayStarShipsGifs, DisplayStarShipsData) {
  let type = $('#typeSelect').val();
  let searchTerm = $('#searchTerm').val();
  $.ajax({
    url: "https://swapi.co/api/" + type + "/?search=" + searchTerm,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      if (type === "starships") {
        if (response.count === 0){
          $('#typeDisplay').text("No Results")
        } else {
          // console.log("1" + response);

          $('#typeDisplay').text("Starship");
          for (let i = 0; i < 1; i++) {
            // console.log("2" + response);
            $.ajax({
              url: 'https://api.giphy.com/v1/gifs/search?api_key=' + GiphyKey + '&q=' + response.results[i].name + '&limit=5',
              type: 'GET',
              data: {
                format: 'json'
              },
              success: function(gif) {
                DisplayStarShipsGifs(gif);
                for (let i = 0; i < 1; i++) {

                  DisplayStarShipsData(response);
                }

              },
              error: function() {
                $('#error').text("error");
              }
            })
          }
        }
      }
    }
  })
}

//       } else if (type === "people") {
//         console.log(response)
//         if (response.count === 0) {
//           $('#typeDisplay').text("No Results")
//         } else {
//           $('#typeDisplay').text("People");
//           for (let j = 0; j < response.results.length; j++) {
//             $.ajax({
//               url: response.results[j].homeworld,
//               type: 'GET',
//               data: {
//                 format: 'json'
//               },
//               success: function(homeworld) {
//                 $.ajax({
//                   url: response.results[j].species,
//                   type: 'GET',
//                   data: {
//                     format: 'json'
//                   },
//                   success: function(species) {
//                     $.ajax({
//                       url: 'https://api.giphy.com/v1/gifs/search?api_key=' + GiphyKey + '&q=' + response.results[j].name + '&limit=5',
//                       type: 'GET',
//                       data: {
//                         format: 'json'
//                       },
//                       success: function(gif) {
//                         $('ul#name').append('<li><img src=" '+ gif.data[RandomGif()].images.fixed_height.url +' ">' + "<br>Name: " +  response.results[j].name + "<br> Hair Color: " + response.results[j].hair_color + "<br> Mass: " + response.results[j].mass + "<br> Gender: " + response.results[j].gender + "<br> Height: " + response.results[j].height + "cm <br> Homeworld: " + homeworld.name + "<br> Species: " + species.name + "</li><hr>");
//                       },
//                       error: function() {
//                         $('#error').text("error");
//                       }
//                     })
//
//                   },
//                   error: function(){
//                     $('#error').text("Oh geez");
//                   }
//                 })
//               },
//               error: function(){
//                 $('#error').text("Oh geez");
//               }
//             })
//           }
//         }
//
//       } else if (type === "planets") {
//         console.log(response);
//         if (response.count === 0){
//           $('#typeDisplay').text("No Results")
//         } else {
//           $('#typeDisplay').text("Planet");
//           for (let k = 0; k < response.results.length; k++) {
//             $.ajax({
//               url: response.results[k].residents[0],
//               type: 'GET',
//               data: {
//                 format: 'json'
//               },
//               success: function(residents) {
//                 $.ajax({
//                   url: 'https://api.giphy.com/v1/gifs/search?api_key=' + GiphyKey + '&q=' + response.results[k].name + '&limit=5',
//                   type: 'GET',
//                   data: {
//                     format: 'json'
//                   },
//                   success: function(gif) {
//                     $('ul#name').append('<li><img src=" '+ gif.data[RandomGif()].images.fixed_height.url +' ">' + "<br>Name: " + response.results[k].name + "<br> Climate: " + response.results[k].climate + "<br> Gravity: " + response.results[k].gravity + "<br> Population: " + response.results[k].population + "<br> Terrain: " + response.results[k].terrain + "<br> Famous Known Resident: " + residents.name + "</li> <hr>");
//                   },
//                   error: function() {
//                     $('#error').text("error");
//                   }
//                 })
//               },
//               error: function(){
//                 $('#error').text("Oh geez");
//               }
//             })
//           }
//         }
//       } else if (type === "vehicles") {
//         console.log(response);
//
//         if (response.count === 0){
//           $('#typeDisplay').text("No Results")
//         } else {
//           $('#typeDisplay').text("Vehicle");
//           for (let l = 0; l < response.results.length; l++) {
//             $.ajax({
//               url: 'https://api.giphy.com/v1/gifs/search?api_key=' + GiphyKey + '&q=' + response.results[l].name + '&limit=5',
//               type: 'GET',
//               data: {
//                 format: 'json'
//               },
//               success: function(gif) {
//                 $('ul#name').append('<li><img src=" '+ gif.data[RandomGif()].images.fixed_height.url +' ">' + "<br>Name: " + response.results[l].name + "<br> Model: " + response.results[l].model + "<br> Manufacturer: " + response.results[l].manufacturer + "<br> Cost (In Credits): " + response.results[l].cost_in_credits + "<br> Vehicle Class: " + response.results[l].vehicle_class + "</li> <hr>");
//               },
//               error: function() {
//                 $('#error').text("error");
//               }
//             })
//             }
//           }
//         } else if (type === "species") {
//           if (response.count === 0){
//             $('#typeDisplay').text("No Results")
//           } else {
//             $('#typeDisplay').text("Species");
//             for (let m = 0; m < response.results.length; m++) {
//               $.ajax({
//                 url: response.results[m].homeworld,
//                 type: 'GET',
//                 data: {
//                   format: 'json'
//                 },
//                 success: function(homeworld) {
//                   $.ajax({
//                     url: response.results[m].people[0],
//                     type: 'GET',
//                     data: {
//                       format: 'json'
//                     },
//                     success: function(person) {
//                       $.ajax({
//                         url: 'https://api.giphy.com/v1/gifs/search?api_key=' + GiphyKey + '&q=' + response.results[m].name + '&limit=5',
//                         type: 'GET',
//                         data: {
//                           format: 'json'
//                         },
//                         success: function(gif) {
//                           $('ul#name').append('<li><img src=" '+ gif.data[RandomGif()].images.fixed_height.url +' ">' + "<br>Name: " + response.results[m].name + "<br> Classification: " + response.results[m].classification + "<br> Homeworld: " + homeworld.name + "<br> Language: " + response.results[m].language + "<br> Famous Member of Species: " + person.name +  "</li><hr>");
//                         },
//                         error: function() {
//                           $('#error').text("error");
//                         }
//                       })
//                     },
//                     error: function(){
//                       $('#error').text("OH SHIT");
//                     }
//                   })
//                 },
//                 error: function(){
//                   $('#error').text("Oh geez");
//                 }
//               })
//             }
//           }
//
//           }
//         },
//       error: function() {
//       $('#error').text("Whoops");
//       }
//       })
// }
