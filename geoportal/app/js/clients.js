import axios from 'axios';
import { URL_API, URL_GEOSERVER } from './settings';

export function insert_client(){
    let name=document.getElementById('form-clients-name').value;
    let last_name=document.getElementById('form-clients-last_name').value;
    let age=document.getElementById('form-clients-age').value;
    let sex=document.getElementById('form-clients-sex').value;
    let geomWkt=document.getElementById('form-clients-geomWkt').value;

    axios.post(URL_API + '/appdesweb/inser_client/',
    {name:name,last_name:last_name,age:age,sex:sex,geomWkt:geomWkt}, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-clients-gid").value=response.data.data[0].gid;
            document.getElementById("form-clients-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-clients-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}


export function select_client(){
    let gid=document.getElementById('form-clients-gid').value;
    //let name=document.getElementById('form-clients-name').value;
    //let last_name=document.getElementById('form-clients-last_name').value;
    //let age=document.getElementById('form-clients-age').value;
    //let sex=document.getElementById('form-clients-sex').value;
    //let geomWkt=document.getElementById('form-clients-geomWkt').value;
    axios.get(URL_API + '/appdesweb/select_client_by_gid/',
    {params:{
            gid:gid
        }
    })
    .then(function (response) {
    // handle success
            console.log(response);
            if (response.data.data.length > 0){
                document.getElementById('form-clients-gid').value=response.data.data[0].gid;
                document.getElementById('form-clients-name').value=response.data.data[0].name;
                document.getElementById('form-clients-last_name').value=response.data.data[0].last_name;
                document.getElementById('form-clients-age').value=response.data.data[0].age;
                document.getElementById('form-clients-sex').value=response.data.data[0].sex;
                document.getElementById('form-clients-geomWkt').value=response.data.data[0].st_astext;

            }else{
                document.getElementById('form-clients-name').value="";
                document.getElementById('form-clients-last_name').value="";
                document.getElementById('form-clients-age').value=""; 
                document.getElementById('form-clients-sex').value="";
                document.getElementById('form-clients-geomWkt').value="";
            }
            document.getElementById("form-clients-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-clients-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}



export function update_client(){
    let gid=document.getElementById('form-clients-gid').value;
    let name=document.getElementById('form-clients-name').value;
    let last_name=document.getElementById('form-clients-last_name').value;
    let age=document.getElementById('form-clients-age').value;
    let sex=document.getElementById('form-clients-sex').value;
    let geomWkt=document.getElementById('form-clients-geomWkt').value;


    axios.post(URL_API + '/appdesweb/update_client/',
    {gid:gid,name:name,age:age,last_name:last_name,sex:sex,geomWkt:geomWkt}, {withCredentials: true})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-clients-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-clients-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-clients-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}




export function delete_client(){
    let gid=document.getElementById('form-clients-gid').value;
    //let client_segment_id=document.getElementById('form-stores-client_segment_id').value;
    //let store_name=document.getElementById('form-stores-store_name').value;
    //let store_description=document.getElementById('form-stores-store_description').value;
    //let geomWkt=document.getElementById('form-stores-geomWkt').value;

    axios.post(URL_API + '/appdesweb/delete_client_by_gid/',{gid:gid})
    .then(function (response) {
    // handle success
            console.log(response);
            document.getElementById("form-clients-gid").value=response.data.data[0].gid;
            //document.getElementById("form-stores-area").value=response.data.data[0].area;
            document.getElementById("form-clients-message").innerHTML=response.data.message;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.getElementById("form-clients-message").innerHTML=error.message;
        })
        .finally(function () {
            // always executed
            console.log('Finally')
    });
}



