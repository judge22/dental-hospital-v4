console.log("Hello, main");
console.log("Test page");

// DOM elements Admin
const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const submitButton = document.getElementById("submit");

//__________________________________________________pages-pathes_____________________________________________________________

const UrlPages = {
    admin: '../pages/admin/dashboard-admin/number-of-patients.html',

    receptionest: '../pages/dashboard-Receptionist/patient-code.html',

    diagnose: '../pages/dashboard-diagnostic-doctor/patient-code.html',

    professor: '../pages/dashboard-professor/students/students.html',

    clinic: './../pages/dashboard-clinic-doctor/patient.code/patient-code.html'
}


//______________________________________________Login-User-Request______________________________________________________

async function loginUser(url) {

    const formData = {
        username: emailInput.value,
        password: passwordInput.value
    };

    try {
        const response = await fetch(url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(formData)
        });

        const data = await response.json();
        console.log("Response status:", response.status);
        console.log("Response data:", data);
        console.log(data.status);
        return data;
    } catch (error) {
        console.log({ errors: error });
    }
}

//_______________________________________________Set-Token________________________________________________________________

function setTokenInLocalStorage(tokenData) {
    const userData = {
        loggedIn: true,
        token: tokenData.token,
        response: tokenData
    };

    localStorage.setItem('token', JSON.stringify(userData));
}

// _______________________________________________redirect-pages _________________________________________________________

function redirectToAdminDashboard(responseData) {

    setTokenInLocalStorage(responseData);

    window.location.href = UrlPages.admin;
}

function redirectToReciptionestDashboard(responseData) {

    setTokenInLocalStorage(responseData);

    window.location.href = UrlPages.receptionest;
}

function redirectToDiagnositicDoctor(responseData) {

    setTokenInLocalStorage(responseData);

    window.location.href = UrlPages.diagnose;
}

function redirectToProfessor(responseData) {

    setTokenInLocalStorage(responseData);

    window.location.href = UrlPages.professor;

}

function redirectToClinicDoctor(responseData) {

    setTokenInLocalStorage(responseData);

    window.location.href = UrlPages.clinic;

}
//________________________________________________handelUser_______________________________________________________________

function handleUserRole(responseData) {
    if (responseData.roles && responseData.roles.includes("Admin")) {

        redirectToAdminDashboard(responseData);

    } else if (responseData.roles && responseData.roles.includes("Receptionist")) {

        redirectToReciptionestDashboard(responseData);

    } else if (responseData.roles && responseData.roles.includes("Student")) {

        redirectToDiagnositicDoctor(responseData)

    } else if (responseData.roles && responseData.roles.includes("Professor")) {

        redirectToProfessor(responseData)

    } else if (responseData.roles && responseData.roles.includes("Clinic")) {
        
        redirectToClinicDoctor(responseData);
    
    }
}

//__________________________________________check-Login-Response____________________________________________________________

function checkLoginResponse(responseData) {
    if (responseData) {
        return true;
    }
    return false;
}

//_______________________________________________subimt-Login________________________________________________________________
try {
    submitButton.addEventListener('click', async () => {

        const url = 'http://dentalhospital.somee.com/api/Account/Login'

        const loginResponse = await loginUser(url);

        if (checkLoginResponse(loginResponse)) {

            handleUserRole(loginResponse);

        } else {
            alert("user name or password invalid");
        }
    });
} catch (error) {

    console.log({ logout_error: error });

}

