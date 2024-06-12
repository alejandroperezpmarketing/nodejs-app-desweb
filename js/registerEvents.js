import { registerEventsClients } from './registerEventsClients';
import { registerEventsStores } from './registerEventsStores';
import { registerEventsStreets } from './registerEventsStreets';

window.onload = function(){
    registerEventsClients();
    registerEventsStores();
    registerEventsStreets();
}