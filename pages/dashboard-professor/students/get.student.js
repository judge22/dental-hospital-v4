console.log("this student names");
const table = document.querySelector("#table-body");
// const name = documnet.querySelector(".inp-search");
const token = JSON.parse(localStorage.getItem('token'));

function nextPage() {
    window.location.href = `./../student.patient/student-name.html`;
}

function setPatient(patient) {

    localStorage.setItem('studentPatient', JSON.stringify(patient));
    nextPage();

}

function setStudents(cases) {

    localStorage.setItem('setDoctor', JSON.stringify(cases));

}

async function getAllPatientBystudentName(name) {

    const response = await fetch(`http://dentalhospital.somee.com/api/Professor/MedicalReportsOfStudent?StudentName=${name}`, {

        method: 'GET',

        headers: {

            'Authorization': `Bearer ${token.token}`

        }

    })

    const res = await response.json();
    setPatient(res);
}

// add action for all student name 
function studentPatient() {
    try {

        const id = document.querySelectorAll("#student-work");

        for (var i = 0; i < id.length; i++) {

            id[i].addEventListener('click', async (event) => {

                await getAllPatientBystudentName(event.target.innerText);

            })
        }
    } catch (e) {
        console.log(e);
    }
}

function studentTable(result) {
    try {

        // console.log(result);
        var box = ``;
        for (var index = 0; index < result.length; index++) {
            box += `<tr class="border-b-gray">
                                <td>
                                <a id="student-work"> ${result[index]}</a>
                                </td>
                            </tr>`
        }

        console.log("box");

        table.innerHTML = box;

    } catch (error) {

        console, log({ errors: error });

    }
}

function searchByName(nameSearch) {

    const students = JSON.parse(localStorage.getItem('setDoctor'));
    // console.log(students); 
    var Names = [];
    for (var name = 0; name < students.length; name++) {
        if (students[name].includes(nameSearch)) {
            console.log("sss");
            Names.push(students[name]);
        }

    }
    studentTable(Names); 
    studentPatient()
}


// get all student for this professor 
async function getStudentds() {

    const studentsData = await fetch('http://dentalhospital.somee.com/api/Professor/StudentsInSpecificClinic', {

        method: 'GET',

        headers: {

            'Authorization': `Bearer ${token.token}`

        },

    })

    const response = await studentsData.json(); 
    studentTable(response);
    setStudents(response);
    studentPatient();
}


getStudentds();

document.querySelector("#search").addEventListener('click', (event) => {

    const name = document.querySelector(".inp-search").value;
  
    searchByName(name);
})