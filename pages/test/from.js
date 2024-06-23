const data = {
    userName: "Rady632",
    gender: "male",
    email: "user23@gmail.com",
    password: "Mo123456789@!",
    confirmPassword: "Mo123456789@!",
    clinic: 43,
    role: "Student",
    round: 0,
    ssn: "38473152610967584488931638",
    name: "Mohamed Rady Hady Bady",
    phone: "01099010079"  , 
    birthDate: "2024-06-19"
  }
function printt(result) {
    for(var i = 0; i < result.length ;i++) {
        console.log("res", result[i]); 
   }
}  
const data2 = JSON.stringify(data);
const tok = JSON.parse(localStorage.getItem('token')); 
console.log(tok.token);
document.querySelector("#sub").addEventListener('click' , async()=>{
    // console.log("data" , data); 
    const res=await fetch('http://dentalhospital.somee.com/api/Professor/MedicalReport?code=VL02NXY1', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tok.token}`
        },
    })
    const result =await res.json();  
   
    // printt(result); 
});