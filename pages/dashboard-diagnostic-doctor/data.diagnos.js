console.log("diagnositic : js");

async function checkCode(code) {

    const token = getToken();
    console.log('code-2', code);
    const url = `http://dentalhospital.somee.com/api/Student/CheckPatient?Code=${code}`;

    const response = await fetch(url, {

        method: 'GET',

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        //    body : null
    });

    console.log("response", response);
    return response;
}

function nextPage(page) {
    if (page == "health") {

        window.location.href = './patient-health profile.html';

    } else if (page == "login") {

        window.location.href = "./../login-employees.html";

    } else if (page == "newPatient") {

        window.location.href = "./patient-code.html";

    }
}

function setPatientCode(code) {

    localStorage.setItem('patient_code', JSON.stringify({ patientCode: code }));

}

function getCode() {

    const codePatient = JSON.parse(localStorage.getItem('patient_code'));

    console.log(codePatient.code);

    return codePatient.patientCode;
}

function getToken() {

    const token = JSON.parse(localStorage.getItem('token'));

    return token.token;
}

async function sendRequest(url, data) {

    console.log(data);

    const token = getToken();

    const patientData = JSON.stringify(data);

    console.log(patientData);

    try {
        const response = await fetch(url, {

            method: 'PATCH',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: patientData
        });

        if (!response.ok) {

            alert('something went wrong');


        } else {

            alert("sent successfully");

            nextPage("newPatient");

            localStorage.removeItem('patient_code');

        }

    } catch (error) {
        alert("error !!!!!!!!!!!");
    }

}

// change password

try {

} catch (error) {

    console.log({ errors: error });

}


// patient code 
try {
    document.querySelector("form").addEventListener("submit", async (event) => {

        event.preventDefault();

        const code = document.querySelector(".patient-code").value;

        console.log({ codePatien: code });
        const check = await checkCode(code);
        console.log('check-d', check);
        if (check.ok) {
            setPatientCode(code);
            nextPage("health");
        } else {
            alert("code not found");
        }

    })
} catch (error) {

    console.log({ errors: error });

}

// health-patient
try {
    var formData = {};
    document.querySelector("#health-patient").addEventListener('submit', async (event) => {

        formData.code = getCode();
        formData.medicalHistory = document.querySelector(".medical-history").value;
        formData.dentalHistory = document.querySelector(".dental-history").value;
        formData.diagnosis = document.querySelector(".diagnose-doctor").value;
        formData.clinic = document.querySelector(".clinic-doctor").value;
        console.log("Data : ", formData)
        await sendRequest("http://dentalhospital.somee.com/api/Student/TreatmentInDiagnosis", formData);
    });
} catch (error) {
    console.log({ errors: error });
}


try {
    document.querySelector('#logout').addEventListener('click', (event) => {
        localStorage.removeItem('token');
        nextPage("login");

    });
} catch (error) {
    console.log({ errors: error });
}
// remove code from local storage 
try {
    console.log("links :", window.location);
    const endPoint = window.location.href;
    if (endPoint.includes("patient-code.html")) {
        localStorage.removeItem('patient_code');
    }
} catch (error) {
    console.log({ errors: error });
}