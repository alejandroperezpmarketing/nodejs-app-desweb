//LOCAL
export var URL_API="http://localhost:8000"
export var URL_GEOSERVER="http://localhost:8083/geoserver"

//export var URL_API="https://vps-3206e74d.vps.ovh.net/djdesweb-api"
//export var URL_GEOSERVER="https://vps-3206e74d.vps.ovh.net/geoserver"

//setMAP_MAIN is to be able to modify the MAP_MAIN variable
//ouside this module
export var MAP_MAIN; export function setMAP_MAIN(value){MAP_MAIN = value;}
var MAP; //openlayers map
var MAP_DRAW_POLYGON; // Draw interaction. Global so we can remove it later
var MAP_SELECT;//Select interaction. Global so we can remove it later
var MAP_CLICK_EVENT;//Map click event. Global so we can remove it later
//var SOURCE_DRAW = new ol.source.Vector({wrapX: false}); //needed for draw
//var VECTOR_DRAW = new ol.layer.Vector({source: SOURCE_DRAW});//The layer were we will draw
var WMS_BUILDINGS_LAYER; //Our WMS layer
