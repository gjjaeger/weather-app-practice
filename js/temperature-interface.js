var Temperature = require('./../js/temperature.js').temperatureModule;

var displayCelsius = function(city, tempData) {
  $('.showCelsius').text("The temperature in " + city + " is " + tempData + " Celsius");
  $('#location').val("");
};

var displayFahrenheit = function(city, tempData) {
  $('.showFahrenheit').text("The temperature in " + city + " is " + tempData + " Fahrenheit");
  $('#location').val("");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#weatherTemp').click(function() {
    var city = $('#location').val();
    currentTemperatureObject.getTempC(city, displayCelsius);
    currentTemperatureObject.getTempF(city, displayFahrenheit);
  });
});
