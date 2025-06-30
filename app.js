require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/widgets/Legend",
    "esri/layers/FeatureLayer"
], function (Map, MapView, Search, Legend, FeatureLayer) {

    // Create the map
    const map = new Map({
        basemap: "streets-navigation-vector"
    });

    // Create the view
    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-98.5795, 39.8283], // USA center
        zoom: 4
    });

    // Optional: Add a Feature Layer
    const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/example/arcgis/rest/services/your_layer/FeatureServer/0"
    });
    map.add(featureLayer);

    // Add widgets
    const searchWidget = new Search({ view: view });
    view.ui.add(searchWidget, "top-right");

    const legend = new Legend({ view: view });
    view.ui.add(legend, "bottom-left");
});
