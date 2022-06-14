// variables que se van a utilizar

var temp, maxtemp, mintemp, desc, wind, hum, main, day, night;

// weather

var x = [
  "clear sky",
  "few clouds",
  "scattered clouds",
  "tornado",
  "shower rain",
  "mist",
  "thunderstorm",
  "rain",
  "snow",
  "haze",
  "broken clouds",
  "drizzle",
];

var y = [
  "iconos/sunny.png",
  "iconos/overcast.png",
  "iconos/cloudy.png",
  "iconos/tornado.png",
  "iconos/fog.png",
  "iconos/shower.png",
  "iconos/rain.png",
  "iconos/thunderstorm.png",
  "iconos/snow.png",
  "iconos/fog.png",
];

var z = [
  "iconos/clear-sky.png",
  "iconos/night-cloudy.png",
  "iconos/cloudy.png",
  "iconos/tornado.png",
  "iconos/fog.png",
  "iconos/shower.png",
  "iconos/rainy-night.png",
  "iconos/thunderstorm.png",
  "iconos/snow.png",
  "iconos/fog.png",
];

function weather(input) {
  var city = input;
  var im = document.querySelector("#icon");
  var myurl = "http://api.openweathermap.org/data/2.5/weather?";
  var key = "d88246dd8d0552f387b6da4530157f38";
  var url = myurl + "appid=" + key + "&units=metric&q=" + city;
  // alert(url);

  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      temp = data.main.temp;
      document.querySelector("#deg").innerHTML = Math.round(temp) + "&deg;C";
      mintemp = data.main.temp_min;
      document.querySelector("#min").innerHTML = Math.round(mintemp) + "&deg;C";
      maxtemp = data.main.temp_max;
      document.querySelector("#max").innerHTML =
        "/" + Math.round(maxtemp) + "&deg;C";
      wind = data.wind.speed;
      document.querySelector("#wind").innerHTML = Math.round(wind) + "mph";
      hum = data.main.humidity;
      document.querySelector("#humidity").innerHTML = hum + "%";
      desc = data.weather[0].description;
      document.querySelector("#description").innerHTML = desc;

      // condicion
      var dn = data.dt;
      day = data.sys.sunrise;
      night = data.sys.sunset;

      if (dn >= night) {
        switch (desc) {
          case x[0]:
            im.src = z[0];

          case x[1]:
            im.src = z[1];
            break;

          case x[2]:
            im.src = z[2];
            break;

          case x[3]:
            im.src = z[3];
            break;

          case x[4]:
            im.src = z[4];
            break;

          case x[5]:
            im.src = z[5];
            break;

          case x[6]:
            im.src = z[6];
            break;

          case x[7]:
            im.src = z[7];
            break;

          case x[8]:
            im.src = z[8];
            break;

          case x[9]:
            im.src = z[9];
            break;

          case x[10]:
            im.src = z[2];
            break;

          case x[11]:
            im.src = z[5];
            break;
        }
      } else if (dn >= day) {
        switch (desc) {
          case x[0]:
            im.src = y[0];
            break;

          case x[1]:
            im.src = y[1];
            break;

          case x[2]:
            im.src = y[2];
            break;

          case x[3]:
            im.src = y[3];
            break;

          case x[4]:
            im.src = y[4];
            break;

          case x[5]:
            im.src = y[5];
            break;

          case x[6]:
            im.src = y[6];
            break;

          case x[7]:
            im.src = y[7];
            break;

          case x[8]:
            im.src = y[8];
            break;

          case x[9]:
            im.src = y[9];
            break;

          case x[10]:
            im.src = y[2];
            break;

          case x[11]:
            im.src = y[5];
            break;
        }
      }
    })

    .catch((err) => console.log(err));
}
// termina la funcion
function con(detector) {
  if (detector == "farenheit") {
    var far = (temp * 9) / 5 + 32;
    document.querySelector("#deg").innerHTML = Math.round(far) + "&deg;F";
    var farmin = (mintemp * 9) / 5 + 32;
    document.querySelector("#min").innerHTML = Math.round(farmin) + "&deg;F";
    var farmax = (maxtemp * 9) / 5 + 32;
    document.querySelector("#max").innerHTML =
      "/" + Math.round(farmax) + "&deg;F";
  } else {
    document.querySelector("#deg").innerHTML = Math.round(temp) + "&deg;C";
    document.querySelector("#min").innerHTML = Math.round(mintemp) + "&deg;C";
    document.querySelector("#max").innerHTML =
      "/" + Math.round(maxtemp) + "&deg;C";
  }
}
