/*

function uploadDealcsv () {}; 

            ------ Method for read uploded csv file ------
            uploadDealcsv.prototype.getCSV = () => {
                
                let input = document.getElementById('inputCSV');

                input.addEventListener('change', function() {

                if (this.files && this.files[0]) {

                    let reader = new FileReader();
                    
                    reader.addEventListener('load', (e) => {
                        parseCsv.getParsecsvdata(e.target.result); // calling function for parse csv data 
                    });
                    
                    reader.readAsBinaryString(this.files[0]);
                    }
                });
            }

            ------- Method for parse csv data and display --------------
            uploadDealcsv.prototype.getParsecsvdata = (data) => {

                let parsedata = [];

                let newLinebrk = data.split("\n");
                //console.log("line: ", newLinebrk)
                for (let i = 0; i < newLinebrk.length; i++) {

                    //parsedata.push(newLinebrk[i].split(","));
                }

                //console.table(parsedata);
                //return newLinebrk;
                formateArray(newLinebrk)
                verifyEAN(newLinebrk)
            }



var parseCsv = new uploadDealcsv();
let listEAN = parseCsv.getCSV();


// 1 - rajout d'une function qui formate la donnée
// 2 - définir un séparateur dans les param function

*/

var tableau = [];

function setArray(data) {
    //tableau = data;
    return tableau = data;
}

document.getElementById('inputCSV').addEventListener('change', function() {
    if (this.files && this.files[0]) {

        let reader = new FileReader();
        
        reader.addEventListener('load', (e) => {
            tableau = getParseCSV(e.target.result); // calling function for parse csv data 
            setArray(tableau)
        });
        
        reader.readAsBinaryString(this.files[0]);
        }
});

document.querySelector("button").addEventListener("click", () => {
    console.log(tableau)
})