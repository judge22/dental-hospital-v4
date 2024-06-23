console.log("jsut check...");
const inputCode = document.querySelector('.code-text');
const subBtn = document.querySelector('.sub-btn');
// console.log(subBtn)
// console.log(inputCode); 
function getToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token.token;
}
function nextPage() {
    window.location.href = `./../patient.health.profile/patient-health profile.html`
}
async function checkCode(code) {
   
    console.log(code);

    const token = getToken();
    try {
 
        const response = await fetch(`http://dentalhospital.somee.com/api/Student/CheckPatient?Code=${code}`, {
 
            headers: {

                'Content-Type': 'application/json',

                'Authorization': `Bearer ${token}`
            },
 
            body: null
 
        })
   
        console.log(response); 
   
        if (response.ok) {
     
            return true;
     
        } else {
     
            return false;
     
        }
    } catch (error) {
 
        console.log({ errors: error.message });
 
    }

 
}
subBtn.addEventListener('click', async () => {
    
    const getCode = inputCode.value;
 
    const check = await checkCode(getCode)
 
    if (check) {

        localStorage.setItem('clinicCode', JSON.stringify(getCode));

        nextPage();
    
    } else {
    
        alert('Please enter correct code ^_^');
    
    }
})
