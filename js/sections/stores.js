import axios from 'axios';
import { MAP_MAIN, URL_API } from '../settings';

export function insert_store(){
    console.log('Insert clicked!');
    let client_segment_id=document.getElementById('form-stores-client_segment_id').value;
    let store_name=document.getElementById('form-stores-store_name').value;
    let store_description=document.getElementById('form-stores-store_description').value;
    let geomWkt=document.getElementById('form-stores-geomWkt').value;



    axios.post(URL_API + '/appdesweb/insert_store/',
    {client_segment_id:client_segment_id,store_name:store_name,store_description:store_description,geomWkt:geomWkt}, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-stores-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-stores-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-stores-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}


export function select_store(){
    let gid=document.getElementById('form-stores-gid').value;
    axios.get(URL_API + '/appdesweb/select_store_by_gid/',
    {params:{
            gid:gid
        }
    })
    .then(function (response) {
    // handle success
            console.log(response);
            if (response.data.data.length > 0){
                document.getElementById('form-stores-gid').value=response.data.data[0].gid;
                document.getElementById('form-stores-client_segment_id').value=response.data.data[0].client_segment_id;
                document.getElementById('form-stores-store_name').value=response.data.data[0].store_name;
                document.getElementById('form-stores-store_description').value=response.data.data[0].store_description;
                document.getElementById('form-stores-geomWkt').value=response.data.data[0].st_astext;   
            }else{
                document.getElementById('form-stores-client_segment_id').value=""; 
                document.getElementById('form-stores-store_name').value=""; 
                document.getElementById('form-stores-store_description').value=""; 
                document.getElementById('form-stores-geomWkt').value=""; 
            }
            document.getElementById("form-stores-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-stores-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}



export function update_store(){
    let gid=document.getElementById('form-stores-gid').value;
    let client_segment_id=document.getElementById('form-stores-client_segment_id').value;
    let store_name=document.getElementById('form-stores-store_name').value;
    let store_description=document.getElementById('form-stores-store_description').value;
    let geomWkt=document.getElementById('form-stores-geomWkt').value;



    axios.post(URL_API + '/appdesweb/update_store/',
    {gid:gid,client_segment_id:client_segment_id,store_name:store_name,store_description:store_description,geomWkt:geomWkt}, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-stores-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-stores-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-stores-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}




/* 

export function delete_store(){
    let gid=document.getElementById('form-stores-gid').value;
    axios.post(URL_API + '/appdesweb/delete_store_by_gid/',
    {params:{
        gid:gid
    }
        })
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-stores-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-client_segment_id").value=response.data.data[0].client_segment_id;
            //document.getElementById("form-stores-store_name").value=response.data.data[0].store_name;
            //document.getElementById("form-stores-store_description").value=response.data.data[0].store_description;
            //document.getElementById("form-stores-geomWkt").value=response.data.data[0].st_astext;
            //document.getElementById("form-buildings-area").value=response.data.data[0].area;
    
            document.getElementById("form-stores-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-stores-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}
 */


export function delete_store(){
    let gid=document.getElementById('form-stores-gid').value;
    //let client_segment_id=document.getElementById('form-stores-client_segment_id').value;
    //let store_name=document.getElementById('form-stores-store_name').value;
    //let store_description=document.getElementById('form-stores-store_description').value;
    //let geomWkt=document.getElementById('form-stores-geomWkt').value;

    axios.post(URL_API + '/appdesweb/delete_store_by_gid/',{gid:gid})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-stores-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-stores-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-stores-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}


export function startDrawingStores(){
    //Enables de draw interaction
    MAP_MAIN.startDrawingStores();
    document.getElementById("map-message").innerHTML="Draw poligon interaction active"
}

export function stopDrawingStores(){
    //Enables de draw interaction
    MAP_MAIN.stopDrawingStores();
    document.getElementById("map-message").innerHTML="Draw poligon interaction inactive"
}

export function reloadWMSStoresLayer(){
    MAP_MAIN.reloadWMSStoresLayer();
    document.getElementById("map-message").innerHTML="WMS stores reloaded"
}

export function clearVectorStoresLayer(){
    MAP_MAIN.clearVectorStoresLayer();
    document.getElementById("map-message").innerHTML="Vector stores layer cleared"
}

    
