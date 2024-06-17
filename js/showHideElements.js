import { libs_general_hideElement, libs_general_showElement, libs_general_hideAllDivsInDivExceptOne} from "./libs/general";

/*MENU*/
//function showDivHome(){
//    libs_general_hideAllDivsInDivExceptOne("div-main", "div-home") 
//}
/* function showDivMap(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-map") 
} */


export function showDivClientsNav(){
	libs_general_showElement('div-map-crud-client');
	libs_general_hideElement('div-map-crud-calles');
	libs_general_hideElement('div-map-crud-form-stores');
}

export function showDivStreetsNav(){
	libs_general_showElement('div-map-crud-calles');
	libs_general_hideElement('div-map-crud-client');
	libs_general_hideElement('div-map-crud-form-stores');
}

export function showDivStoresNav(){
	libs_general_showElement('div-map-crud-form-stores');
	libs_general_hideElement('div-map-crud-calles');
	libs_general_hideElement('div-map-crud-client');
}





/* function showDivHelp(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-help") 
} */
function showDivLogin(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-login") 
}
function showDivLogout(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-logout") 
}

function showDivDeleteAllStores(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-delete-all-buildings");
}
/*CRUD*/

function showStoreForm_mode_insert(){
	/*Muestra los botones de comenzar y terminar de dibujar, y el botón insert
	 * Oculta los divs que contienen los botones para seleccionar por gid y por coordenadas
	 * Oculta los botones para actualizar y borrar
	 * */
	libs_general_hideElement('form-stores_div_select_controls');
	libs_general_hideElement('form-stores_div-select-buttons');
	libs_general_showElement('form-stores_div-insert-buttons');
}

function showStoreForm_mode_select(){
	/**
	 * Muestra los divs para seleccionar por gid y coordenadas
	 * Muestra los botones para actualizar y borrar
	 * Oculta los botones para insertar, comenzar y terminar de dibujar*/
	libs_general_showElement('form-stores_div_select_controls');
	libs_general_showElement('form-stores_div-select-buttons');
	libs_general_hideElement('form-stores_div-insert-buttons');	
}

function showHideElements_linkMenuEvents(){
	/*MENU*/
    //document.getElementById("menu-home").addEventListener("click", showDivHome);
    document.getElementById("menu-map").addEventListener("click", showDivStores);
   //document.getElementById("menu-help").addEventListener("click", showDivHelp);
    document.getElementById("menu-login").addEventListener("click", showDivLogin);
    document.getElementById("menu-logout").addEventListener("click", showDivLogout);
    //document.getElementById("menu-delete-all-buildings").addEventListener("click", showDivDeleteAllBuildings);

    /*CRUD*/
    document.getElementById("btt-building-crud-show-insert").addEventListener("click", showBuildingForm_mode_insert);
    document.getElementById("btt-building-crud-show-select").addEventListener("click", showBuildingForm_mode_select);

}
