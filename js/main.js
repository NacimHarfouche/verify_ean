// instantiate Class
let csvHandler = new CSVHandler();
let formatArray = new FormatArray();
let verifyArray = new VerifyArray();

// create a table and append it
function appendTableDOM() {
    let tableElt = document.createElement("table");
    tableElt.innerHTML = `
        <thead>
            <tr>
                <th colspan="3">List of EAN in Error</th>
            </tr>
            <tr>
                <th>Line</th>
                <th>EAN</th>
                <th>Error</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    let sectionElt = document.createElement("section");
    sectionElt.id = "result";
    // append elements
    sectionElt.appendChild(tableElt);
    document.querySelector("main").appendChild(sectionElt);
}

// append the errors in the table
function displayErrors(eanInError) {
    let tBodyElt = document.createElement("tbody");
    for (let i = 0; i < eanInError.length; i++){
        EAN = eanInError[i];
        tBodyElt.innerHTML += `
            <tr>
                <td>${EAN.line}</td>
                <td>${EAN.ean}</td>
                <td>${EAN.error}</td>
            </tr>
        `;
    }
    // append in table
    document.querySelector("table").appendChild(tBodyElt);
}

// display a message to say it's ok
function displayOk() {
    let pElt = document.createElement("p");
    pElt.textContent = "All EAN are correct";
    let sectionElt = document.createElement("section");
    // append elements
    sectionElt.appendChild(pElt);
    document.querySelector("main").appendChild(sectionElt);
}

// when the file is chosen and load
document.getElementById('inputCSV').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        csvHandler.setFile(this.files[0]);
        csvHandler.readIt();
        // enable the button to click
        document.querySelector("button").disabled = false;
    }
});

// when the button is push
document.querySelector("button").addEventListener("click", () => {
    // remove the previous section containt the result
    let sectionElt = document.getElementById("result");
    if (sectionElt != null) sectionElt.remove();
    // proced of format and verify the ean -> POO
    let eanArray = csvHandler.getArray();
    eanArray = formatArray.getformattedArray(eanArray);
    let eanInError = verifyArray.getVerifyEAN(eanArray);
    // verify that the array is not empty to display
    if (eanInError.length > 0) {
        appendTableDOM();
        displayErrors(eanInError);
    } else {
        displayOk();
    }
    // disable the button
    document.querySelector("button").disabled = true; 
});