var APIKey = '8343aa2f82c4d7c14fbc6bfe91697a86';
var APIURLRoot = 'https://api.openweathermap.org';
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#searchBarInput');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');
var historyBox = document.querySelector('#history');

function openWeatherMap() {
    var requestUrl = new URL('https://api.openweathermap.org');
  
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  
  }