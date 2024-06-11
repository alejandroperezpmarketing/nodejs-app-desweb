/*MENU*/
//function showDivHome(){
//    libs_general_hideAllDivsInDivExceptOne("div-main", "div-home") 
//}
function showDivMap(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-map") 
}
function showDivClients(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-map-clients") 
}
function showDivStreets(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-map-streets") 
}
function showDivStores(){
    libs_general_hideAllDivsInDivExceptOne("div-main", "div-map-stores") 
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
function showStoreCrudInSidenav(){
	/*There is only one form, but in case you add an other */
	libs_general_hideAllDivsInDivExceptOne("div-map-side-nav", "div-map-crud-stores");
}

function showStoreCrudInSidenav(){
	/*There is only one form, but in case you add an other */
	libs_general_hideAllDivsInDivExceptOne("div-map-side-nav", "div-map-crud-client");
}
function showStoreCrudInSidenav(){
	/*There is only one form, but in case you add an other */
	libs_general_hideAllDivsInDivExceptOne("div-map-side-nav", "div-map-crud-calles");
}

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
