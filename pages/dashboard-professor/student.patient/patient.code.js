console.log("this code patient ");
function p(ans) {
    console.log(ans);
}
const table = document.querySelector('#table-code');
// p(table); 

function getPatientCode() {
    const codes = JSON.parse(localStorage.getItem('studentPatient'));
    // p(codes
    return codes;
}

function setReport(code) {
    localStorage.setItem('report', JSON.stringify(code));
    window.location.href = `./../report.patient/detiles-student.html`;
}

function addEventL() {
    const AllPatient = document.querySelectorAll("#code-patient");
    for (var patient = 0; patient < AllPatient.length; patient++) {
        AllPatient[patient].addEventListener('click', (event) => {
            //  alert(e.target.innerText);
            setReport(event.target.innerText);
        })
    }
}

function TableCodes() {

    const allCodes = getPatientCode();
    var boxItem = ``;
    for (var index = 0; index < allCodes.length; index++) {

        boxItem += `   <tr class="border-b-gray">
                                <td>
                                <a id = "code-patient">${allCodes[index]}</a></td>
                            </tr>`
    }
    table.innerHTML = boxItem;
    addEventL();
}
TableCodes();