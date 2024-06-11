import {login, logout} from '../login';
import { insert_street, select_street, update_street, delete_street } from '../streets';

export function registerEventsStreets(){
    document.getElementById('button-login').addEventListener('click',login);
    document.getElementById('button-logout').addEventListener('click',logout);
    document.getElementById('form-streets-insert_street').addEventListener('click',insert_street);
    document.getElementById('form-streets-delete_street').addEventListener('click',delete_street);
    document.getElementById('form-streets-update_street').addEventListener('click',update_street);
    document.getElementById('form-streets-select_street').addEventListener('click',select_street);
}