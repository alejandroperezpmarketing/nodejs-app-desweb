import {login, logout} from './login';
import { insert_store, select_store, update_store, delete_store} from './sections/stores';

export function registerEventsStores(){
    document.getElementById('button-login').addEventListener('click',login);
    document.getElementById('button-logout').addEventListener('click',logout);
    document.getElementById('form-stores-insert').addEventListener('click',insert_store);
    document.getElementById('form-stores-select').addEventListener('click',select_store);
    document.getElementById('form-stores-update').addEventListener('click',update_store);
    document.getElementById('form-stores-delete').addEventListener('click',delete_store);
}