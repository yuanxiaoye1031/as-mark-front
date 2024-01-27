import {defineStore} from "pinia";
import mapboxgl from "mapbox-gl";

export const useMapStore = defineStore("map", {
    // 存数据的地方
    state(){
        return {
            map:null,
        }
    },

    actions:{
        // 初始化地图
        initMap(container){
            mapboxgl.accessToken = 'pk.eyJ1IjoieXlpc21lIiwiYSI6ImNsbnpxNjBkdzA5Y3kya3Mza3hzM2RteHAifQ.JrgnwqQVFyF1IHPZmXeTIQ';
            this.map = new mapboxgl.Map({
                container: container,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: [116.39082, 39.91589],
                zoom: 2,
                // attributionControl:false,
            });
            this.map.addControl(new mapboxgl.NavigationControl());
        },
    }
})
