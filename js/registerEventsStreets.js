import { insert_street, select_street, update_street, delete_street, startDrawingStreets, stopDrawingStreets, reloadWMSStreetsLayer, clearVectorStreetsLayer  } from './sections/streets';

export function registerEventsStreets(){
    document.getElementById('form-streets-insert_street').addEventListener('click',insert_street);
    document.getElementById('form-streets-delete_street').addEventListener('click',delete_street);
    document.getElementById('form-streets-update_street').addEventListener('click',update_street);
    document.getElementById('form-streets-select_street').addEventListener('click',select_street);
    document.getElementById('form-streets_btt-start-drawing').addEventListener('click',startDrawingStreets);
    document.getElementById('form-streets_btt-stop-drawing').addEventListener('click',stopDrawingStreets);
    document.getElementById('form-streets_btt-reload-drawing').addEventListener('click',reloadWMSStreetsLayer);
    document.getElementById('form-streets_btt-clear-drawing').addEventListener('click',clearVectorStreetsLayer);


}