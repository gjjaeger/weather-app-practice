var apiKey = require('./../.env').apiKey;

Temperature=function(){

};

Temperature.prototype.getTempC = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('.showCelsius').text(error.responseJSON.message);
  });
};

Temperature.prototype.getTempF = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('.showFahrenheit').text(error.responseJSON.message);
  });
};

exports.temperatureModule = Temperature;
