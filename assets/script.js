var APIkey = 'c3af6e45795e59cae1dc9209a98b58e5'

var forecastList = document.getElementById('forecastList')
var cityName = document.getElementById('searchCity')
var cityTemp = document.getElementById('Temp')
var cityWind = document.getElementById('Wind')
var cityHumidity = document.getElementById('Humidity')
var cityUV = document.getElementById('UVindex')
var searchBtn = document.getElementById('searchBtn')
var currentPic = document.getElementById('currentPic')
var currentDate = moment().format('MM/DD/YYYY')


function cityWeather() {
    var searchInput = document.getElementById('searchInput').value
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput + '&appid=' + APIkey + '&units=imperial')
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var city = data.name
        var weatherIcon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
        var temp = data.main.temp
        var windSpeed = data.wind.speed
        var humidity = data.main.humidity
        
        cityName.textContent = city + ' ' + currentDate
        currentPic.src = weatherIcon
        cityTemp.textContent = 'Temperature: F ' + temp
        cityWind.textContent = 'Wind Speed: ' + windSpeed + ' mph'
        cityHumidity.textContent = 'Humidity: ' + humidity + '%'
      });
      localStorage.setItem('previous city', searchInput)
      
    }

function fiveDayForecast() {
  var searchInput = document.getElementById('searchInput').value

  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&appid=' + APIkey + '&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let index = 4; index < 40; index+=8) { 
      var cityContainer = document.createElement('div')
      var cityDateContainer = document.createElement('p')
      var tempContainer = document.createElement('p')
      var windSpeedContainer = document.createElement('p')
      var humidityContainer = document.createElement('p')

      cityContainer.classList.add('card')

      cityContainer.append(cityDateContainer, tempContainer, windSpeedContainer, humidityContainer)

      tempContainer.textContent = 'Temperature: F ' 
      windSpeedContainer.textContent = 'Wind Speed: '
      humidityContainer.textContent = 'Humidity: '
      cityDateContainer
      // var city = data.city.name
      // cityContainer.append(city)
      var cityDate = data.list[index].dt_txt
      cityDateContainer.append(cityDate)
    // append a class to icon to use css
    // var weatherIcon = 'https://openweathermap.org/img/wn/' + data.list[index].weather[index].icon + '@2x.png'
      // var city = data.city.name
      // cityDateContainer.append(city)

      var temp = data.list[index].main.temp
      tempContainer.append(temp)
      
      var windSpeed = data.list[index].wind.speed
      windSpeedContainer.append(windSpeed)

      var humidity = data.list[index].main.humidity
      humidityContainer.append(humidity)

      forecastList.append(cityContainer)

  //       // make a loop starting at 4th index that increments by 8 each round
      }

  })

}

// renderLastCity()

// function renderLastCity(){
//   var lastCity = localStorage.getItem('previous city');
//   var previousSearch = document.getElementById('previousSearch');

//   previousSearch.textContent = lastCity;

// }

searchBtn.addEventListener('click', cityWeather)
searchBtn.addEventListener('click', fiveDayForecast)
$('#searchBtn').on('click',function(event){
  var lastCity = localStorage.getItem('previous city')
  $('#previousSearch').prepend(`<button class="btn btn-secondary col mb-2 searchBtn">${lastCity}</button>`)
})

// api.openweathermap.org/data/2.5/forecast?q=wilmington&appid=c3af6e45795e59cae1dc9209a98b58e5