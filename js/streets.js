import axios from 'axios';
import { URL_API, URL_GEOSERVER } from './settings';

export function insert_street(){
    let street_name=document.getElementById('form-streets-street_name').value;
    let municipality=document.getElementById('form-streets-municipality').value;
    let postal_code=document.getElementById('form-streets-postal_code').value;
    let geomWkt=document.getElementById('form-streets-geomWkt').value;

    axios.post(URL_API + '/appdesweb/insert_streets/',
    {street_name:street_name,municipality:municipality,postal_code:postal_code,geomWkt:geomWkt}, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-streets-gid").value=response.data.data[0].gid;
            //document.getElementById("form-streets-area").value=response.data.data[0].area;
            document.getElementById("form-streets-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-streets-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}

export function select_street(){
    let gid=document.getElementById('form-streets-gid').value;
    axios.get(URL_API + '/appdesweb/select_street_by_gid/',
    {params:{
            gid:gid
        }
    }, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            if (response.data.data.length > 0){
                document.getElementById("form-streets-gid").value=response.data.data[0].gid;
                document.getElementById("form-streets-street_name").value=response.data.data[0].street_name;
                document.getElementById("form-streets-municipality").value=response.data.data[0].municipality;
                document.getElementById("form-streets-postal_code").value=response.data.data[0].postal_code;
                document.getElementById("form-streets-geomWkt").value=response.data.data[0].st_astext;
                //document.getElementById("form-buildings-area").value=response.data.data[0].area;    
            }else{
                document.getElementById("form-streets-gid").value="";
                document.getElementById("form-buildings-geomWkt").value="";
                //document.getElementById("form-buildings-area").value=""; 
            }
            document.getElementById("form-streets-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-streets-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}


export function update_street(){
    let gid=document.getElementById('form-streets-gid').value;
    let street_name=document.getElementById('form-streets-street_name').value;
    let municipality=document.getElementById('form-streets-municipality').value;
    let postal_code=document.getElementById('form-streets-postal_code').value;
    let geomWkt=document.getElementById('form-streets-geomWkt').value;



    axios.post(URL_API + '/appdesweb/update_street/',
    {gid:gid,street_name:street_name,municipality:municipality,postal_code:postal_code,geomWkt:geomWkt}, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-streets-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-streets-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-streets-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}




export function delete_street(){
    let gid=document.getElementById('form-streets-gid').value;
    //let client_segment_id=document.getElementById('form-stores-client_segment_id').value;
    //let store_name=document.getElementById('form-stores-store_name').value;
    //let store_description=document.getElementById('form-stores-store_description').value;
    //let geomWkt=document.getElementById('form-stores-geomWkt').value;

    axios.post(URL_API + '/appdesweb/delete_street_by_gid/',{gid:gid})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-streets-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-streets-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-streets-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}
