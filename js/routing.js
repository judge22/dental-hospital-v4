
const loggedIn = JSON.parse(localStorage.getItem('token'));

function loginPage() {
    // window.location.href = "./../../login-employees.html";
    window.location.href = 'file:///E:/Dental%20Hospital%20project%20graduation/DUHS-master/pages/login-employees.html'
}
if (loggedIn == null) {
    loginPage();
    throw new Error("You should login");
}

var protectPath = loggedIn.response.roles[0];
var currPage = window.location.href;

// protect routing ...
if (protectPath == "Student" && !(currPage.includes("dashboard-diagnostic-doctor"))) {
    loginPage();
} else if (protectPath == "Admin" && !(currPage.includes("admin"))) {
    loginPage();
} else if(protectPath == "Clinic" && !(currPage.includes("dashboard-clinic-doctor"))) {
    loginPage();
} else if(protectPath == "Professor" && !(currPage.includes("dashboard-professor"))) {
    loginPage();
} else if(protectPath == "Receptionist" && !(currPage.includes("dashboard-Receptionist"))) {
    loginPage();
} 
