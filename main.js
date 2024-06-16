import "./scss/styles.scss";
import './css/styles.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css'
import "./js/registerEvents";
import { helloWord } from "./js/helloWorld";
import { Projection } from "ol/proj";
//import {map} from './js/map/mapMain'
import {MapMain} from './js/map/mapMain';
//import {setMap_MAIN} from 'js/settings';
//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { setMAP_MAIN } from "./js/settings";
// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

//var map = new MapMain();
window.onload = function(){
    setMAP_MAIN(new MapMain());
}