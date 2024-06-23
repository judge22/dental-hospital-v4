// import { sendRequest } from "./send.data.js";
console.log("hello patient");
const Name = document.querySelector("#name");
const Id = document.querySelector("#id");
const date = document.querySelector("#date");
const phone = document.querySelector("#phone");
const gender = document.querySelector("#gender");
formData = {};

document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();
     
    formData.name = Name.value;

    formData.patientSSN = Id.value;
     
    formData.patientNumber = phone.value; 

    formData.birthDate = "2024-06-14T13:40:46.620Z";

    formData.gender = gender.value; 

    console.log("data :", formData);
    getData(formData , `http://dentalhospital.somee.com/api/Patient/PatientRegister`);

})
async function RequestData(data, url) {

    try {

       const insertData = JSON.stringify(data); 
        console.log("URL", url);
        console.log("D2" , insertData); 
        const req = await fetch(url, {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },
            body: insertData
        });
        
        const res = await req.json();  
       
        if (req.status == 400 || req.status == 401) {
            return {code : null , message : false};
        }
        else if (req.status == 200) {
            return {code : res.code , message : true};
        }
    } catch (e) { 
        alert("patient is already exist!!"); 
        console.error(error , e.errors);

        return 0;
    }
}

function Next(url  , code){
    localStorage.setItem('code_reserve' , JSON.stringify({code : code})); 
    window.location.href =  url;  
    alert("press ok to continue..."); 
}
async function getData(data, url) {

    console.log("Data : ", data);

    var checkRequest = await RequestData(data, url);
  
    if (checkRequest.message == 1) {
        
        alert("Patient regestration successfully O^O"); 

        Next("./reservationCode.html" , checkRequest.code); 
        } else {
        alert("Patient not regestration O~O");
       }
}   