<template>
  <router-view />
</template>

<style>
@import "./assets/css/styles.css";
#weather h1 {
  font-weight: 900;
  font-size: 70px;
}

h2 {
  font-family: helvetica;
  font-weight: 900;
  font-size: 35px;
  text-transform: uppercase;
}

.half {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  height: 100vh;
}
</style>


<script>
export default {
  watch: {
    $route: function () {
      const getWeather = async () => {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Jacksonville&appid=84f6fcb7efd5ed80b67a592c6b8b5939&units=imperial",
          { method: "GET" }
        );

        const data = await response.json();

        return data;
      };

      getWeather().then((data) => {
        let temp = data.main.temp.toString().slice(0, 2);
        let type = data.weather[0].main.toString();
        let test;

        if (type == "Clear") {
          test = "http://openweathermap.org/img/wn/01d@2x.png";
          document.querySelector(
            "#weather"
          ).innerHTML = `<div class="container"><div class="row"><div class="col-6"><img src="${test}"></div><div class="col-6"><h1>${temp}<span>&#176;</span></h1></div></div></div>`;
        } else if (type == "Clouds") {
          test = "http://openweathermap.org/img/wn/03d@2x.png";
          document.querySelector(
            "#weather"
          ).innerHTML = `<div class="container"><div class="row"><div class="col-6"><img src="${test}"></div><div class="col-6"><h1>${temp}<span>&#176;</span></h1></div></div></div>`;
        } else if (type == "Drizzle" || type == "Rain") {
          test = "http://openweathermap.org/img/wn/10d@2x.png";
          document.querySelector(
            "#weather"
          ).innerHTML = `<div class="container"><div class="row"><div class="col-6"><img src="${test}"></div><div class="col-6"><h1>${temp}<span>&#176;</span></h1></div></div></div>`;
        } else if (type == "Thunderstorm") {
          test = "http://openweathermap.org/img/wn/11d@2x.png";
          document.querySelector(
            "#weather"
          ).innerHTML = `<div class="container"><div class="row"><div class="col-6"><img src="${test}"></div><div class="col-6"><h1>${temp}<span>&#176;</span></h1></div></div></div>`;
        } else if (type == "Snow") {
          test = "http://openweathermap.org/img/wn/13d@2x.png";
          document.querySelector(
            "#weather"
          ).innerHTML = `<div class="container"><div class="row"><div class="col-6"><img src="${test}"></div><div class="col-6"><h1>${temp}<span>&#176;</span></h1></div></div></div>`;
        } else if (type == "Mist" || type == "Fog" || type == "Haze") {
          test = "http://openweathermap.org/img/wn/50d@2x.png";
          document.querySelector(
            "#weather"
          ).innerHTML = `<div class="container"><div class="row"><div class="col-6"><img src="${test}"></div><div class="col-6"><h1>${temp}<span>&#176;</span></h1></div></div></div>`;
        }
      });
    },
  },
};
</script>
