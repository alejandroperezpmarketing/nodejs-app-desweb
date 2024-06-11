import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// Import all of Bootstrap's JS
import * as bootstrap from './node_modules/bootstrap'
import {Alert} from './node_modules/bootstrap/js/dist/alert';
import { helloWord } from './js/helloWorld';
//import { enlazaEventos } from './js2/enlazaEventos';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

//registerEventsStreets(); //funciona
//registerEventsClients(); //funciona
//registerEventsStores(); //funciona
//helloWord();
