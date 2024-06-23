var printCode = document.querySelector(".code"); 
document.querySelector('.print-button').addEventListener('click' , ()=>{
          window.print(); 
})

function load() {
    console.log(printCode);

    const get = JSON.parse(localStorage.getItem("code_reserve"));
    console.log(get);
    const code = get.code;

    var codeOut = `
            <input type="text" value="${code[0]}" readonly />
            <input type="text" value="${code[1]}" readonly />
            <input type="text" value="${code[2]}" readonly />
            <input type="text" value="${code[3]}" readonly />
            <input type="text" value="${code[4]}" readonly />
            <input type="text" value="${code[5]}" readonly />
            <input type="text" value="${code[6]}" readonly />
            <input type="text" value="${code[7]}" readonly />
            `
    printCode.innerHTML = codeOut;
    console.log(codeOut);
    // printInputData(get.code);
}
load(); 