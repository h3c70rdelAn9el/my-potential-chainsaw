<template>
<div class="-mt-3">
  <!--
  <p class="text-green-600">
    I hail from {{ weather.name }} where it's currently {{ weather.weather[0].main }} and {{ Math.round(weather.main.temp) }}°F.
  </p>
  -->
  <p class="text-green-600">
    I hail from {{ weather.name }} where it's currently {{ Math.round(weather.main.temp) }}°F.
  </p>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      api_key: process.env.GRIDSOME_WEATHER_API,
      url_base: 'https://api.openweathermap.org/data/2.5/',
      city: 'Glendale, US',
      weather: {},
    }
  },
  async mounted() {
    try {
      const res = await axios.get(`${this.url_base}weather?q=${this.city}&appid=${this.api_key}&units=imperial`)
      this.weather = res.data
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
