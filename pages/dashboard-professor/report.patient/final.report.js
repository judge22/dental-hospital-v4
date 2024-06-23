function p(d) {

    console.log(d);
}
const logoutBtn = document.querySelector("#logout-3"); 
const medical = document.querySelector("#medical-history");
const dental = document.querySelector("#dental-history");
const diagnose = document.querySelector("#diagnose-desc");
const description = document.querySelector("#description");
const treatment = document.querySelector("#treatment");

const token = JSON.parse(localStorage.getItem('token'));
const code = JSON.parse(localStorage.getItem('report'));

function setData(data) {
    medical.innerHTML = data.medicalHistory;
    dental.innerHTML = data.dentalHistory;
    diagnose.innerHTML = data.diagnosis;
    treatment.innerHTML = data.treatment;
    description.innerHTML = data.description;
}

async function getReport(code) {

    const response = await fetch(`http://dentalhospital.somee.com/api/Professor/MedicalReport?code=${code}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token.token}`
        },
    })
    const result = await response.json();
    setData(result);
    console.log(result)
}

getReport(code);

