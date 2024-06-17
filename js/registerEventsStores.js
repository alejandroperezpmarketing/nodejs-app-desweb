import { insert_store, select_store, update_store, delete_store, startDrawingStores, stopDrawingStores, reloadWMSStoresLayer, clearVectorStoresLayer } from './sections/stores';
import {showDivStoresNav} from './showHideElements';

export function registerEventsStores(){
    console.log('Insert clicked!');
    document.getElementById('form-stores-insert').addEventListener('click',insert_store);
    document.getElementById('form-stores-select').addEventListener('click',select_store);
    document.getElementById('form-stores-update').addEventListener('click',update_store);
    document.getElementById('form-stores-delete').addEventListener('click',delete_store);
    document.getElementById('form-stores_btt-start-drawing').addEventListener('click',startDrawingStores);
    document.getElementById('form-stores_btt-stop-drawing').addEventListener('click',stopDrawingStores);
    document.getElementById('form-stores_btt-reload-drawing').addEventListener('click',reloadWMSStoresLayer);
    document.getElementById('form-stores_btt-clear-drawing').addEventListener('click',clearVectorStoresLayer);
    document.getElementById('stores-nav-link').addEventListener('click',showDivStoresNav);
}