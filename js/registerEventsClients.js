import {login, logout} from './login';
import { insert_client, select_client, update_client, delete_client } from './sections/clients';

export function registerEventsClients(){
    document.getElementById('button-login').addEventListener('click',login);
    document.getElementById('button-logout').addEventListener('click',logout);
    document.getElementById('form-clients-insert').addEventListener('click',insert_client);
    document.getElementById('form-clients-select').addEventListener('click',select_client);
    document.getElementById('form-clients-update').addEventListener('click',update_client);
    document.getElementById('form-clients-delete').addEventListener('click',delete_client);

}