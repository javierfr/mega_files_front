import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, icon, Layer } from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})

/**
 * leaflet Component
 */
export class LeafletComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Maps' },
      { label: 'Leaflet', active: true }
    ];
  }

  /**
   * Basic Maps
   */
  options = {
    layers: [
      tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      )
    ],
    zoom: 13,
    center: latLng(51.505, -0.09)
  };

  /**
   * Markers Maps 
   */
  markers = {
    layers: [
      tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      )
    ],
    zoom: 13,
    center: latLng(51.505, -0.09)
  };
  markersLayers = [
    circle([51.508, -0.11], { color: "#34c38f", fillColor: "#34c38f", radius: 500 }),
    polygon([[51.509, -0.08], [51.503, -0.06], [51.51, -0.047],], { color: "#556ee6", fillColor: "#556ee6" }),
    marker([51.5, -0.09])
  ];

  /**
   * Popups Maps
   */
  popups = {
    layers: [
      tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }
      )
    ],
    zoom: 13,
    center: latLng(51.505, -0.09)
  };
  popupLayers = [
    circle([51.508, -0.11], { color: "#34c38f", fillColor: "#34c38f", radius: 500 }).bindPopup("I am a circle."),
    polygon([[51.509, -0.08], [51.503, -0.06], [51.51, -0.047],], { color: "#556ee6", fillColor: "#556ee6" }).bindPopup("I am a polygon."),
    marker([51.5, -0.09]).bindPopup("<b>Hello world!</b><br />I am a popup.")
  ];

  /**
   * Custom Map
   */
  custom = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
    ],
    zoom: 13,
    center: latLng(51.5, -0.09)
  };
  customLayers = [
    marker([51.5, -0.09], {
      icon: icon({
        iconSize: [45, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        iconUrl: 'assets/images/logo-sm.svg'
      })
    }),
  ];

  /**
   * Choropleth Maps
   */
  choropleth = {
    layers: [
      tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
        id: "mapbox/light-v9",
        tileSize: 512,
        zoomOffset: -1,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      })
    ],
    zoom: 1.1,
    center: latLng(28, 1.5)
  };
  choroplethLayers = [
    circle([41.9, 12.45], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([12.05, -61.75], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([1.3, 103.8], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
  ];

  /**
   * Groups Maps
   */
  groups = {
    layers: [
      tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      })
    ],
    zoom: 10,
    center: latLng(39.73, -104.99)
  };
  GroupsLayers = [
    marker([39.61, -105.02]).bindPopup("This is Littleton"),
    marker([39.74, -104.99]).bindPopup("This is Denver"),
    marker([39.73, -104.8]).bindPopup("This is Aurora"),
    marker([39.77, -105.23]).bindPopup("This is Golden")
  ];

}

// markers: any;
// longitude = -77.028333;
// latitude = -12.043333;
// zoom: number = 9;


// constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

// @Input() pitch: number = 10;
// @Input() scrollwheel: boolean = false;
// center: any;

// ngOnInit(): void {
//   /**
//     * BreadCrumb 
//     */
//   this.breadCrumbItems = [
//     { label: 'Maps' },
//     { label: 'Google maps', active: true }
//   ];
// }

// mapOptions: google.maps.MapOptions = {
//   center: { lat: 48.8588548, lng: 2.347035 },
//   zoom: 13,
// };

// markers: MarkerProperties[] = [
//   { position: { lat: 48.8584, lng: 2.2945 } }, // Eiffel Tower
//   { position: { lat: 48.8606, lng: 2.3376 } }, // Louvre Museum
//   { position: { lat: 48.8530, lng: 2.3499 } }, // Cathédrale Notre-Dame de Paris
// ];