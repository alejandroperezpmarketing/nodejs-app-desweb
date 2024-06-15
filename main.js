import "./scss/styles.scss";
import './css/styles.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css'
import "./js/registerEvents";
import { helloWord } from "./js/helloWorld";
import {Map, View} from 'ol';
//import {mapMain} from './js/map/mapMain';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
//import {setMap_MAIN} from 'js/settings';
//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

export const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });