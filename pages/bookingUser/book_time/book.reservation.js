console.log("from reservation");
const ID = document.querySelector("#add");
const submitID = document.querySelector("#submit-id");

const formData = {};

document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();
    try {
        submitID.addEventListener('click', () => {

            console.log("id = ", ID.value);

            formData.SNN = ID.value;

            getData(formData, `http://dentalhospital.somee.com/api/Patient/Reservation?SNN=${formData.SNN}`);
        })
    } catch (error) {

        console.log({ mesage: false, errors: error });

    }
})

async function sendRequest(data, url) {

    ssn = JSON.stringify(data);
    console.log("SNN" , ssn); 
    console.log("data" , data);

    try {

        const req = await fetch(url, {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            }
        });

        const res = await req.json();
        console.log(req);

        console.log(res);

        if (req.status == 200) {

            return { message: true, code: {codeRes : res.code , from : res.from , to : res.to}};

        } else {

            return { message: false, code: null };

        }

    } catch (error) {
        alert(error.message); 
        console.log({ message: false, errors: error });

    }
}

function Next(url, code) {

    localStorage.setItem('code_reserve_', JSON.stringify({ code: code }));

    window.location.href = url;

    alert("press ok to continue...");
}
async function getData(url, data) {

    const checkRequest = await sendRequest(url, data);
    if (checkRequest.message == 1) {
        Next("./reserve-code.html", checkRequest.code);
    } else {
        alert("please try again ...");
    }
}