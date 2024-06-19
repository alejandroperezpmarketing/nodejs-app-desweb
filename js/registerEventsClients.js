import { insert_client, select_client, update_client, delete_client } from './sections/clients';
import {showDivClientsNav} from './showHideElements';


export function registerEventsClients(){
    console.log('Insert clicked!');
    document.getElementById('form-clients-insert').addEventListener('click',insert_client);
    document.getElementById('form-clients-select').addEventListener('click',select_client);
    document.getElementById('form-clients-update').addEventListener('click',update_client);
    document.getElementById('form-clients-delete').addEventListener('click',delete_client);
    //document.getElementById('form-client_btt-start-drawing').addEventListener('click',start_drawing);
    //document.getElementById('form-client_btt-stop-drawing').addEventListener('click',stop-drawing);
    document.getElementById('clients-nav-link').addEventListener('click',showDivClientsNav);

}