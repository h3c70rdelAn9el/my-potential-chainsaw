<template>
<div class="text-green-600 sm:text-base text-sm">
  <p class="">
    I hail from {{ weather.cityName }}, CA, where it's currently {{ (weather.description) }} and {{ Math.round(weather.temp) }}°F.
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
      weather: {
        cityName: null,
        temp: null,
        description: null
      },
    }
  },
  async created() {
    try {
      const res = await axios.get(`${this.url_base}weather?q=${this.city}&appid=${this.api_key}&units=imperial`)
      this.weather = res.data
      this.weather.cityName = res.data.name
      this.weather.temp = res.data.main.temp
      this.weather.description = (res.data.weather[0].main).toLowerCase()
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
