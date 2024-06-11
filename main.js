// Import our custom CSS
//import './scss/styles.scss'
//import {Map, View} from 'ol';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'
//import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
//import { Tooltip, Toast, Popover } from 'bootstrap';
import {insert_store, select_store, update_store, delete_store} from './js/stores.js';

function mainInit(){
    //document.getElementById('button-login').addEventListener('click',login);
    //document.getElementById('button-logout').addEventListener('click',logout);

    document.getElementById('form-stores-insert').addEventListener('click',insert_store);
    document.getElementById('form-stores-select').addEventListener('click',select_store);
    document.getElementById('form-stores-update').addEventListener('click',update_store);
    document.getElementById('form-stores-delete').addEventListener('click',delete_store);
    
    mapMain(); //initializes the map in the div id="map"
}
function login(){
	var f = document.getElementById("form-login");
	var formData = new FormData(f)
	var data =Object.fromEntries(formData);
	var js= JSON.stringify(data);

	$.ajax({
	    url: URL_DJANGO_API + 'app_login/',  //url where the data is sent
	    type: "POST",   //send method POST or GET
	    dataType: 'json',  // type of data to send
	    data: js,  //the data to send
	    contentType: 'application/json;charset=UTF-8',  // content type
	    success: function (data){  //callback function. It will wait for the server answer
	    	console.log(data); //logs the server answer in the console
	    	
	    	//Shows the server message and the gid of the new building on the paragraph p-message
	    	document.getElementById("p-login-message").innerHTML = data.message; 
	    },
	    error: function (err){
	    	console.log(err); //in case of error logs the error in the console
	    }
	});
}
function logout(){
	$.ajax({
	    url: URL_DJANGO_API + 'app_logout/',  //url where the data is sent
	    type: "GET",   //send method POST or GET
	    dataType: 'json',  // type of data to send
	    data: '',  //the data to send
	    contentType: 'application/json;charset=UTF-8',  // content type
	    success: function (data){  //callback function. It will wait for the server answer
	    	console.log(data); //logs the server answer in the console
	    	
	    	//Shows the server message and the gid of the new building on the paragraph p-message
	    	document.getElementById("p-login-message").innerHTML = data.message; 
	    },
	    error: function (err){
	    	console.log(err); //in case of error logs the error in the console
	    }
	});
	
}


  window.onload = function(){

    mainInit();


  }