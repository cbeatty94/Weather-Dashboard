var APIkey = 'c3af6e45795e59cae1dc9209a98b58e5'

var cityName = document.getElementById('searchCity')
var cityTemp = document.getElementById('Temp')
var cityWind = document.getElementById('Wind')
var cityHumidity = document.getElementById('Humidity')
var cityUV = document.getElementById('UVindex')
var searchBtn = document.getElementById('searchBtn')


function cityWeather() {
    var searchInput = document.getElementById('searchInput').value
    console.log(searchInput)

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&appid=' + APIkey)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    

}

searchBtn.addEventListener('click', cityWeather)

// api.openweathermap.org/data/2.5/forecast?q=wilmington&appid=c3af6e45795e59cae1dc9209a98b58e5