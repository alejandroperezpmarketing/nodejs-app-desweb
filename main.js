import "./scss/styles.scss";
import './css/styles.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css'
import "./js/registerEvents";
import { helloWord } from "./js/helloWorld";
import {Map, View} from 'ol';
import {mapMain} from './js/map/mapMain';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
//import {setMap_MAIN} from 'js/settings';
//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

function mainInit(){
    //document.getElementById('button-login').addEventListener('click',login);
    //document.getElementById('button-logout').addEventListener('click',logout);
    //mapMain(); //initializes the map in the div id="map"
	//registerEvents();
	//setMap_MAIN();
}

  window.onload = function(){

    mainInit();


  }