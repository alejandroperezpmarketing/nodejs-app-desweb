import { registerEventsClients } from './registerEventsClients';
import { registerEventsStores } from './registerEventsStores';
import { registerEventsStreets } from './registerEventsStreets';
import {login, logout} from './login';


export function registerEvents(){
    document.getElementById('button-login').addEventListener('click',login);
    document.getElementById('button-logout').addEventListener('click',logout);

}

window.onload = function(){
    //registerEventsClients();
    //registerEventsStores();
    //registerEventsStreets();
    registerEvents();
}