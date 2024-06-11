/**
 * Here is where the map is started., with the function mapInit()
 * The function inimap is called from the mainInit function in js/main.js
 */

function mapMain(){
	//Map projection
    epsg25830 = new ol.proj.Projection({
          code: 'EPSG:25830',
          // The extent is used to determine zoom level 0. Recommended values for a
          // projection's validity extent can be found at http://epsg.io/.
          extent: [716682.702,4365814.329,732380.437,4376383.664],
          units: 'm'
    });
    ol.proj.addProjection(epsg25830);


	
	//style for the vector layer used to draw
	//OL3 allow points, lines and polygons at the same layer,
	//so the style specifies an style for each type of geometry
	//	fill: fill color for polygons
	//	stroke: type of line for lines
	//  image: for points. Allow different symbols and images
	var vector_draw_style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#D7DF01'
        }),
        stroke: new ol.style.Stroke({
          color: '#DF013A',
          width: 3,
          lineJoin: 'round'
        }),
        image: new ol.style.Circle({
            radius: 4,
            fill: new ol.style.Fill({
              color: '#DF013A'
            })
          })
    });
	
	//VECTOR_DRAW is a global variable, defined in js/mySettings.js
	//The layer were we will draw
	VECTOR_DRAW.setStyle(vector_draw_style);
	VECTOR_DRAW.setOpacity(0.5);
	
    //Layer PNOA. Orthophoto aerea. To add other layers you only have to copy this
    //layer definition and change the url of the WMS service, and the layer names to load
    var lyr_pnoa = new ol.layer.Tile({
    	source: new ol.source.TileWMS(({       
        	url: 'http://www.ign.es/wms-inspire/pnoa-ma',
        	params: {"LAYERS": "OI.OrthoimageCoverage", 'VERSION': "1.3.0", "TILED": "true"},
    		})),
    	title: "PNOA-MA"
	});

    var ortofoto_icv_2021 = new ol.layer.Tile({
        source: new ol.source.TileWMS(({
		url: "https://terramapas.icv.gva.es/odcv05_etrs89h30_2021?",
		params: {"LAYERS": "ortofoto_2021_Comunitat_Valenciana", 'VERSION': "1.3.0", "TILED": "true", "TYPE": 'base'},
        })),
        title: "Ortofoto ICV 2021"
      });

const parser = new ol.format.WMTSCapabilities();


const result = parser.read(CAPABILITIES_ICV_WMTS);
const options = ol.source.WMTS.optionsFromCapabilities(result, {
  layer: '01_8bits_01_RGB_05_PNG',
  matrixSet: 'EPSG:25830',
});




var orto_icv_wmts=new ol.layer.Tile({
      opacity: 1,
      source: new ol.source.WMTS(options),
		title: "Ortofoto ICV"
    })




   	var catastro_wms= new ol.layer.Tile({
	        source: new ol.source.TileWMS({
	          url: 'https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?',
	          // crossOrigin: '*', (En capas del ign y catastro no se pone crossOrigin)
	          params: {
	            'LAYERS': 'Catastro', 'VERSION': '1.1.1', 'TILED': true, 'TRANSPARENT': true, 'FORMAT': 'image/png'
	          },
	        }), name: 'Cadastre', description: 'Cadastre', visible: true, title:'Cadastre'
	      });
    WMS_BUILDINGS_LAYER = new ol.layer.Tile({
        source: new ol.source.TileWMS(({
          url: URL_GEOSERVER + 'wms?',
          params: {"LAYERS": "desweb:buildings", 'VERSION': "1.3.0", "TILED": "true"},
        })),
        title: "Buildings"
      });
        
    //Adds the mouse coordinate position to the map
    var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:25830',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      //className: 'custom-mouse-position',
      //target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });

    
    //Map definition. The variable MAP is a global var. All the global variables
    //are named in upperletters and placed in js/mySettings.py
    MAP = new ol.Map({
        controls: ol.control.defaults({
            attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
              collapsible: false
            })
          }).extend([mousePositionControl]),
        target: 'map', //the map will be placed in the div id=map
        renderer: 'canvas',
        layers: [ lyr_pnoa,catastro_wms,WMS_BUILDINGS_LAYER, VECTOR_DRAW],//the layers are added here
        view: new ol.View({
           projection:epsg25830, //the projection of the map is set here
           maxZoom: 28, minZoom: 1,  
           center: [724950.649,4371212.645], //the initial center of the map
           zoom: 2 //the initial zoom
        })
      });
    
    //Layer swicher definition
    var layerSwitcher=new ol.control.LayerSwitcher({
        tipLabel:'Leyenda'
    });
    //adds the layer swicher to the map
    MAP.addControl(layerSwitcher);
}


