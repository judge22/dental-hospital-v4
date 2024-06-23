console.log('logout.js');
try {

    document.querySelector('#logout-3').addEventListener('click', () => {
      
        window.location.href = "./../login-employees.html"; 
      
        localStorage.clear();
    
    })

} catch (error) {

    console.log({ errors: error });

}