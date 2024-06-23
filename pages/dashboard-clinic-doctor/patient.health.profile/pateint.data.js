console.log("P h p");

const setMedical = document.querySelector('#medical-history')
const setDental = document.querySelector('#dental-history')
const setDeiagnose = document.querySelector('#diagnosis')
const getDesc = document.querySelector('#description')
const getTreat = document.querySelector('#treatment')
const getSsn = document.querySelector('#SSN')
const svBtn = document.querySelector('.save-btn');


function getCode() {
    const code = JSON.parse(localStorage.getItem('clinicCode'));
    console.log(code);
    return code;
}

function getToken() {

    const token = JSON.parse(localStorage.getItem('token'));

    return token.token;
}

function setData(medical, dental, diagnose) {
    setMedical.innerHTML = medical;
    setDental.innerHTML = dental;
    setDeiagnose.innerHTML = diagnose;
}

async function getData() {

    const token = getToken();

    const code = getCode();

    console.log(token);

    try {

        const response = await fetch(`http://dentalhospital.somee.com/api/Student/GetDiagnosis?code=${code}`, {

            headers: {

                'Content-Type': 'application/json',

                'Authorization': `Bearer ${token}`
            },
        })

        const res = await response.json();
     
        console.log(res); 

        setData(res.medicalHistory, res.dentalHistory, res.diagnosis);

   
    } catch (error) {
        alert('something went wrong please waiting...');
        console.log({ errors: error.message });

    }
}

getData()

function set() {

    const data = {

        code: getCode(),

        description: getDesc.value,

        treatment: getTreat.value,

        studentSSN: getSsn.value

    }

    console.log(data);

    return data;
}

async function sendData() {

    const data = set();

    const report = JSON.stringify(data);

    const token = getToken();

    console.log(token, report, data);

    try {

        const response = await fetch('http://dentalhospital.somee.com/api/Student/AddTreatment', {

            method: 'PATCH',

            headers: {

                'Content-Type': 'application/json',

                'Authorization': `Bearer ${token}`
            },

            body: report

        })
        
        if (response.ok) {

            alert('report saved successfully !');

            window.location.href = './../patient.code/patient-code.html';

        } else {

            alert('something went wrong');

        }

    } catch (error) {
        alert('something went wrong please waiting...');
        console.log({ errors: error.message });
    }
}

svBtn.addEventListener('click', async(event) => await sendData()); 
