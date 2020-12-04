<template>
  <div id="app">
    {{location.lat}} {{location.lon}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      location: {
        lat: '',
        lon: ''
      }
    };
  },
  mounted() {
    console.log(navigator.geolocation.getCurrentPosition((location) => {
      this.location.lat = location.coords.latitude;
      this.location.lon = location.coords.longitude;
    }));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
