// Import our custom CSS
import '../scss/styles.scss'
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

import './general.js';


const map = new Map({
	target: 'div-map',
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
