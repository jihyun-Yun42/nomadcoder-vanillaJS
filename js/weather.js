function onGeoOk(position) {
  const APIkey = '0c8373b655dd0b184a88a8ac2c4301a9'
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child')
    const city = document.querySelector('#weather span:last-child')
    city.innerText = data.name
    weather.innerText = data.weather[0].main
  })
}
function onGeoError() {
  alert('위치 탐색이 어렵습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)