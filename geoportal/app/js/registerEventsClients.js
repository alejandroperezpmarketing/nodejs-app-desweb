import {login, logout} from './login';
import { insert, select } from './buildings';

export function registerEventsClients(){
    document.getElementById('button-login').addEventListener('click',login);
    document.getElementById('button-logout').addEventListener('click',logout);
    document.getElementById('form-building-insert').addEventListener('click',insert);
    document.getElementById('form-stores-select').addEventListener('click',select);

}