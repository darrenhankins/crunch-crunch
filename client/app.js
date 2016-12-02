$(document).ready(function(){
 $('.hero-button').on("click", getData)
})


const url = "http://localhost:3000/";

function getData(event) {
  event.preventDefault();
  $.get(url, appendWars);
}

function appendWars(data){
  console.log(data);
  // parsedData = JSON.parse(data);
  $('.headline').append(`<p>War: ${data[0].name}</p><p>Confirmed Kills: ${data[0].battles_fought}</p><p>Prisoners: ${data[0].battles_won}</p>`)
}
