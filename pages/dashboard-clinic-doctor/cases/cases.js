console.log("hello from cases");

const tbody = document.querySelector('.body-table')

function getToken() {

    const token = JSON.parse(localStorage.getItem('token'));

    return token.token;
}

async function finishPatient(code) {

    // alert(code);

    const token = getToken();

    try {
        
        const response = await fetch(`http://dentalhospital.somee.com/api/Student/CheckFinish?code=${code}`, {
        
            method: 'PATCH',
            
            headers: {
    
                'Content-Type': 'application/json',
    
                'Authorization': `Bearer ${token}`
            },
    
            body: null
        })
    
         if(response.ok) {
            alert('finished successfully ^_^'); 
            window.location.reload();
         }

    } catch (error) {

        console.log({ errors: error });

    }
}

function setCode(code) {

    console.log("ccccode :- ", code);

    localStorage.setItem('clinicCode', JSON.stringify(code));

    window.location.href = './../patient.health.profile/patient-health profile.html';
}

function addEventL() {

    const sentBtn = document.querySelectorAll('.finish');

    const addSession = document.querySelectorAll('.add-session');

    for (var btn = 0; btn < sentBtn.length; btn++) {

        addSession[btn].addEventListener('click', (event) => {

            setCode(event.target.id);

        });
        sentBtn[btn].addEventListener('click', (event) => {

            finishPatient(event.target.id);

        });

    }

}

function setDataTabe(codes) {

    var box = ``;

    for (var code = 0; code < codes.length; code++) {

        box += `  <tr>
                  <td id = "code-finish">${codes[code]}</td>
                  <td class="text-center">
                  <a  class="add-session-btn add-session" id = "${codes[code]}">add session</a>
                  <a  class="sent-btn finish" id="${codes[code]}">sent</a>
                  </td>
                  </tr>`
    }

    tbody.innerHTML = box;

    addEventL();
}

async function getCases() {

    const token = getToken();
    try {

        const response = await fetch(`http://dentalhospital.somee.com/api/Student/Cases`, {

            headers: {

                'Content-Type': 'application/json',

                'Authorization': `Bearer ${token}`
            },

        })

        const res = await response.json();

        setDataTabe(res);

    } catch (error) {

        console.log({ errors: error.message });

    }
}

getCases();