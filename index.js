const checkBtn = document.querySelector("#check");
    const inputEl = document.querySelector("#input");
    let result = document.querySelector("#result")
    
    function calculate() {
        if(inputEl.value % 2 === 0) 
       result.innerHTML = 'number is Even'
        else 
        result.innerHTML = 'number is odd'
    }
    
checkBtn.addEventListener("click",calculate);