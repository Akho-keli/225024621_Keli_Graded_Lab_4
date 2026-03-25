// This lines of code will get the elements for the Compare , clear button and the results from the html 
let compare = document.getElementById("compare-btn");
let clear= document.getElementById("clear-btn");
let result = document.getElementById("result");

compare.addEventListener("click", function () {

    result.innerHTML = "";
    result.className = "";
// The lines will get the html elements with their ids for both textareas 
    let expectedText = document.getElementById("expected").value;
    let actualText = document.getElementById("actual").value;

// This if statement will  check if both fields are empty
    if (expectedText === "" || actualText === "") {
        let li = document.createElement("li");
        li.textContent = "Please enter text in both areas";
        result.appendChild(li);
        return; 
    }
    let expectedLines = expectedText.split("\n");
    let actualLines = actualText.split("\n");

    let hasDifference = false; 

//This loop will loop through each  lines and will  compare one by one
    for (let i = 0; i < expectedLines.length; i++) {
        if (expectedLines[i] !== actualLines[i]) {

            let li = document.createElement("li");
            li.textContent = `Line ${i + 1} is different: Expected is : "${expectedLines[i]}" <br>, Actual is : "${actualLines[i]}"`;
            result.appendChild(li);

            hasDifference = true; 
        }
    }
//This statement will check if number of lines is different

    if (expectedLines.length !== actualLines.length) {
        let li = document.createElement("li");
        li.textContent = `Different number of lines: Expected is: ${expectedLines.length} The  Actual text is: ${actualLines.length}`;
        result.appendChild(li);

        hasDifference = true;
    }
//This will check If no differences found
    if (!hasDifference) {
        let li = document.createElement("li");
        li.textContent =  `No differences found`;
        result.appendChild(li);
//This will include the  green background class
        result.classList.add("nochange");
    } 
    else {
      
        result.classList.add("change");     
        let message= document.createElement("li");
        message.textContent = "Texts are different";
        result.innerHTML = "<li>Texts are different</li>" + result.innerHTML;
    }
});
//This function if for the clear button to clear both text areas
clear.addEventListener("click", function () {
    document.getElementById("expected").value = "";
    document.getElementById("actual").value = "";

    result.innerHTML = "";
    result.className = "";
});