<template>
  <div id="map-container" ref="mapContainer"></div>
</template>

<script setup>
  import 'mapbox-gl/dist/mapbox-gl.css';

  import {useMapStore} from "../store/map.js";
  import {onMounted, ref} from "vue";

  const mapStore = useMapStore()  // 地图仓库
  const mapContainer = ref(null)

  const initMap = async ()=>{
    await mapStore.initMap(mapContainer.value)
  }

  onMounted(()=>{
    initMap()
  })

</script>

<style scoped>
  #map-container {
    height: 70vh;
    width: 60vw;
  }

</style>
