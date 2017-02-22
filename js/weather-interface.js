var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
  $('#location').val("");
};
var displayTemperature = function(city, temperatureData) {
  $('.showWeather').text("The temperature in " + city + " is " + temperatureData + " Kelvin");
  $('#location').val("");
};


$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    currentWeatherObject.getWeather(city, displayHumidity);
  });
  $('#weatherTemp').click(function() {
    var city = $('#location').val();
    currentWeatherObject.getTemp(city, displayTemperature);
  });
});