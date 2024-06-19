/**
 * Created on 14 dic. 2019
 * @author: Gaspar Mora-Navarro
 * Department of Cartographic Engineering Geodesy and Photogrammetry
 * Higher Technical School of Geodetic, Cartographic and Topographical Engineering
 * joamona@cgf.upv.es
 */

/**
 * Add a draw interaction to the map. The draw interaction is linked to the 
 * SOURCE_DRAW variable, which is the source for the layer MAP_DRAW
 * defined in the file js/mySettings.js
 * */
function addDrawPolygonInteraction() {
    /*Possible values for tipo_geom:
     * 		"Point","LineString","Polygon"
     * 	MAP_DRAW_POLYGON, SOURCE_DRAW and MAP are global variables, defined in
     *  mySettings.js, so thet are accesible from any function
     * */
        MAP_DRAW_POLYGON = new ol.interaction.Draw({
            source: SOURCE_DRAW, //source of the layer where the poligons will be drawn
            type: ('Polygon') //geometry type
          });
        
        //When a polygon is drawn the callback function manageDrawEnd will be executed.
        //The system pass to the function a parameter e, which is an objects with
        //a lot of properties, one of which is the geometry of the geometry just drawn
        //This must be done only once
        MAP_DRAW_POLYGON.on('drawend', manageDrawEnd);
        
        //adds the interaction to the map. This must be done only once
        MAP.addInteraction(MAP_DRAW_POLYGON);
    }
    
    //Enables the polygons draw
    function enableDrawPolygons(){
        remove_map_click()
        MAP_DRAW_POLYGON.setActive(true);
    }
    
    //Disables the polygons draw
    function disableDrawPolygons(){
        MAP_DRAW_POLYGON.setActive(false);
    }
    
    //Enables clear the vector layer
    function clearVectorLayer(){
        SOURCE_DRAW.clear();
    }
    //Reload Buildings WMS Layer
    function reloadBuildingsWmsLayer(){
        WMS_BUILDINGS_LAYER.getSource().updateParams({"time": Date.now()})
    }
    
    /**
     * Function which is executed each time that a polygon is finished of draw
     * Inside the e object is the geometry drawed
     * */
    function manageDrawEnd (e) {
        var feature = e.feature;//this is the feature that fired the event
        var wktFormat = new ol.format.WKT();//an object to get the WKT format of the geometry
        var wktRepresenation  = wktFormat.writeGeometry(feature.getGeometry());//geomertry in wkt
        console.log(wktRepresenation);//logs a message
        var form = document.getElementById("form-building");//get the buildings form html object
        form.elements["geomWkt"].value=wktRepresenation;//set the geometry in wkt format to the geomWkt input
    }
    
    