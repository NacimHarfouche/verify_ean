/*------ Method for read uploded csv file ------*/
function getCSV() {
                
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