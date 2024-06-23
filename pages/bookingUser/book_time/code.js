console.log("code patient!!!!!!!!!!!!!!!!!!!!!!!!!");
var printCode = document.querySelector("#reservation-code"); 
var from  = document.querySelector("#from"); 
var to  = document.querySelector("#to"); 
document.querySelector('#print-btn').addEventListener('click' , ()=>{
          window.print(); 
})

function load() {
    console.log(printCode);

    const get = JSON.parse(localStorage.getItem("code_reserve_"));
    console.log(get);
    var code = get.code.codeRes;
    console.log("code", typeof(code));
    code = code.toString(); 
    console.log(code); 
    var showCode = `
                        <span>${code[0]}</span>
                        <span>${code[1]}</span>
                        <span>${code[2]}</span>
                        <span>${code[3]}</span>
                        <span>${code[4]}</span>
                        <span>${code[5]}</span>
                        <span>${code[6]}</span>
                        <span>${code[7]}</span>
                           
      `
    showTime = ``;   
    printCode.innerHTML = showCode; 
    from.innerHTML = get.code.to;
    to.innerHTML = get.code.from; 
}
load(); 