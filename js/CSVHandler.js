/**
 * Class Handle an input file in CSV format
 */
class CSVHandler {
    
    constructor() {
        this.reader = new FileReader();
        this.file;
        this.theArray = [];
    }
    
    // setters
    setFile(inputFile) {
        this.file = inputFile;
    }

    setArray(data) {
        this.theArray = data;
    }

    // getters
    getArray() {
        return this.theArray;
    }

    // read the file
    readIt() {
        this.reader.addEventListener('load', (e) => {
            this.getParseCSV(e.target.result);        
        });
        this.reader.readAsBinaryString(this.file);
    }

    // parse the csv data in array
    getParseCSV(data) {
        // set it in the array
        this.setArray(data.split("\n"));
    }
}