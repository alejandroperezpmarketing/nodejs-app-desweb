import { Map, View } from 'ol';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import { Projection } from 'ol/proj';
import { TileWMS } from 'ol/source';
import { URL_GEOSERVER } from '../settings';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
//needed to style the vector layers
import { Circle as CircleStyle, Fill, RegularShape, Stroke, Style, Text } from 'ol/style.js';
//import { UNSIGNED_SHORT } from 'ol/webgl';


//import LayerSwitcher from 'ol-layerswitcher';
//Mouse position control
//import MousePosition from 'ol/control/MousePosition.js';
//Scaleline control
//import {ScaleLine} from 'ol/control.js';
//Function to round coordinates
//import {createStringXY} from 'ol/coordinate.js';
//Groups are used to group layers
//import {Group as LayerGroup} from 'ol/layer.js'

//https://openlayers.org/en/latest/examples/wms-tiled.html//

export class MapMain {
  constructor() {
    this.vector_stores_layer_source_draw = undefined;
    this.vector_stores_layer = undefined;
    // this.vector_clients_layer_source_draw = undefined;
    // this.vector_clients_layer = undefined;
    // this.vector_streets_layer_source_draw = undefined;
    // this.vector_streets_layer = undefined;
    this.layers = this.createLayers();
    this.map = this.initMap()
  }
  createLayers() {
    // PNOA
    var pnoa = new TileLayer({
      source: new TileWMS({
        url: 'http://www.ign.es/wms-inspire/pnoa-ma',
        params: { "LAYERS": "OI.OrthoimageCoverage", 'VERSION': "1.3.0", "TILED": "true" },
        attributions: ["PNOA-MA"]
      }),
      name: 'PNOA',
      description: 'PNOA',
      visible: true,
      title: 'PNOA',
      //type: 'base'
    });

    // Catastro
    var catastro = new TileLayer({
      source: new TileWMS({
        url: 'https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?',
        params: { 'LAYERS': 'Catastro', 'VERSION': '1.1.1', 'TILED': true, 'TRANSPARENT': true, 'FORMAT': 'image/png' },
      }),
      name: 'Cadastre',
      description: 'Cadastre',
      visible: true,
      title: 'Cadastre',
      //type: 'base'
    });
    // Stores
    var stores = new TileLayer({
      source: new TileWMS({
        url: URL_GEOSERVER + '/wms?',
        params: { 'LAYERS': 'AlejandroPerez_desweb:stores', 'VERSION': '1.3.0', 'TILED': true },
      }),
      name: 'Stores',
      description: 'Stores',
      visible: true,
      title: 'Stores',
      //type: 'base'
    });

    // Streets
    var streets = new TileLayer({
      source: new TileWMS({
        url: URL_GEOSERVER + '/wms?',
        params: { 'LAYERS': 'AlejandroPerez_desweb:streets', 'VERSION': '1.3.0', 'TILED': true },
      }),
      name: 'Streets',
      description: 'Streets',
      visible: true,
      title: 'Streets',
      //type: 'base'
    });

    // Clients

    var clients = new TileLayer({
      source: new TileWMS({
        url: URL_GEOSERVER + '/wms?',
        params: { 'LAYERS': 'AlejandroPerez_desweb:clients', 'VERSION': '1.3.0', 'TILED': true },
      }),
      name: 'Clients',
      description: 'Clients',
      visible: true,
      title: 'Clients',
      //type: 'base'
    });

    //style for the vector layer used to draw
    //OL3 allow points, lines and polygons at the same layer,
    //so the style specifies an style for each type of geometry
    //	fill: fill color for polygons
    //	stroke: type of line for lines
    //  image: for points. Allow different symbols and images
    var vector_layers_draw_style = new Style({
      fill: new Fill({
        color: '#D7DF01'
      }),
      stroke: new Stroke({
        color: '#DF013A',
        width: 3,
        lineJoin: 'round'
      }),
      image: new CircleStyle({
        radius: 4,
        fill: new Fill({
          color: '#DF013A'
        })
      })
    });

    //stores vector layer
    this.vector_stores_layer_source_draw = new VectorSource({ wrapX: false }); //needed for draw
    this.vector_stores_layer = new VectorLayer({
      source: this.vector_stores_layer_source_draw,
      title: 'Stores draw layer'
    });//The layer were we will draw
    this.vector_stores_layer.setStyle(vector_layers_draw_style);
    this.vector_stores_layer.setOpacity(0.5);

    // //clients vector layer
    // this.vector_clients_layer_source_draw = new VectorSource({ wrapX: false }); //needed for draw
    // this.vector_clients_layer = new VectorLayer({
    //   source: this.vector_clients_layer_source_draw,
    //   title: 'Stores draw layer'
    // });//The layer were we will draw
    // this.vector_clients_layer.setStyle(vector_layers_draw_style);
    // this.vector_clients_layer.setOpacity(0.5);

    // //streets vector layer
    // this.vector_streets_layer_source_draw = new VectorSource({ wrapX: false }); //needed for draw
    // this.vector_streets_layer = new VectorLayer({
    //   source: this.vector_streets_layer_source_draw,
    //   title: 'Stores draw layer'
    // });//The layer were we will draw
    // this.vector_streets_layer.setStyle(vector_layers_draw_style);
    // this.vector_streets_layer.setOpacity(0.5);


    /* const baselayers = new LayerGroup({
      title: 'Base layers:',
      layers: [pnoa, catastro],
    }); */

    //return [pnoa, catastro, stores, clients, streets]
    return [pnoa, catastro, stores]

  }
  // initMap----
  initMap() {

    let epsg25830 = new Projection({
      code: 'EPSG:25830',
      extent: [716682.702, 4365814.329, 732380.437, 4376383.664],
      units: 'm'
    });

    const map = new Map({
      target: 'map',
      layers: this.layers,
      renderer: 'canvas',
      view: new View({
        projection: epsg25830,
        maxZoom: 28, minZoom: 1,
        center: [724950.649, 4371212.645], //the initial center of the map
        zoom: 2 //the initial zoom
      }),
    });
    return map;
    // initMap----

  }
}

