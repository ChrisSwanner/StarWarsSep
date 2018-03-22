import $ from 'jquery';
import './styles.css';
import { SearchFactsAndGifsAjax } from './../src/starwar.js';

function RandomGif() {
  let num = Math.floor(Math.random() * 5);
  return num;
}
var DisplayStarShipsGifs = function(gif) {
  console.log(gif.data)
  $('ol#dataDisplay').append('<img src=" '+ gif.data[RandomGif()].images.fixed_height.url +' ">' + "<hr>");
}

var DisplayStarShipsData = function(response) {
  for (let i = 0; i < response.results.length; i++) {
    $('ol#dataDisplay').append('<li id="' + response.results[i].name + '"><br>Name: ' + response.results[i].name + "<br> Crew Size: " + response.results[i].crew + "<br> Hyper Drive Rating: " + response.results[i].hyperdrive_rating +  "<br> Model: " + response.results[i].model + "<br> Manufacturer: " + response.results[i].manufacturer + "<br> Cost (In Credits): " + response.results[i].cost_in_credits +  "</li> <hr>");
    console.log(response.results[i].name);

  }
}


$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    $('#typeDisplay').text("Searching....")
    $('ol#dataDisplay').empty();
    $('#error').text("");

        SearchFactsAndGifsAjax(DisplayStarShipsGifs, DisplayStarShipsData);

      })
    })
