var APIkey = 'c3af6e45795e59cae1dc9209a98b58e5'

var forecastList = document.getElementById('forecastList')
var cityName = document.getElementById('searchCity')
var cityTemp = document.getElementById('Temp')
var cityWind = document.getElementById('Wind')
var cityHumidity = document.getElementById('Humidity')
var cityUV = document.getElementById('UVindex')
var searchBtn = document.getElementById('searchBtn')
var currentPic = document.getElementById('currentPic')


function cityWeather() {
    var searchInput = document.getElementById('searchInput').value
   
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&appid=' + APIkey + '&units=imperial')
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var city = data.city.name
        var cityDate = data.list[4].dt_txt
        // append a class to icon to use css
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png'
        var temp = data.list[0].main.temp
        var windSpeed = data.list[0].wind.speed
        var humidity = data.list[0].main.humidity

        cityName.textContent = city + ' ' + cityDate 
        currentPic.src = weatherIcon
        cityTemp.textContent = 'Temperature: F ' + temp
        cityWind.textContent = 'Wind Speed: ' + windSpeed + ' mph'
        cityHumidity.textContent = 'Humidity: ' + humidity + '%'

        for (let index = 4; index < 40; index+=8) { 
          var cityContainer = document.createElement('div')
          var city = data.city.name
          cityContainer.append(city)
          var cityDate = data.list[index].dt_txt
        // append a class to icon to use css
        // var weatherIcon = 'https://openweathermap.org/img/wn/' + data.list[index].weather[index].icon + '@2x.png'
          var temp = data.list[index].main.temp
          var windSpeed = data.list[index].wind.speed
          var humidity = data.list[index].main.humidity

          forecastList.append(cityContainer)

          // make a loop starting at 4th index that increments by 8 each round
        }
        // + ('http://openweathermap.org/img/wn/' + weatherIcon + '@2x.png') 
      });
    
    

}

searchBtn.addEventListener('click', cityWeather)

// api.openweathermap.org/data/2.5/forecast?q=wilmington&appid=c3af6e45795e59cae1dc9209a98b58e5