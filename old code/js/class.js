class CSVHandler {

    getParseCSV(data) {
        // let parseArray = data.split("\n");
        // return parseArray;
        return data.split("\n");
    }

    getformateArray(inputArray) {
        for (let i = 0; i < inputArray.length; ++i) {
            // remove \n
            if (/[\n]{1}/ig.test(inputArray[i])) {
                inputArray[i] = inputArray[i].replace(`\n`, ``);
            }
            //remove \r
            if (/[\r]{1}/ig.test(inputArray[i])) {
                inputArray[i] = inputArray[i].replace(`\r`, ``);
            }
            // remove ;
            if (/[;]{1}/ig.test(inputArray[i])) {
                inputArray[i] = inputArray[i].replace(`;`, ``);
            }
            // remove |
            if (/[|]{1}/ig.test(inputArray[i])) {
                inputArray[i] = inputArray[i].replace(`|`, ``);
            }
        }
        return inputArray;
    }

    getVerifyEAN(inputArray) {
        outputArray = []
        for (let ean of inputArray) {
            if (/.*[ean]{1}.*/ig.test(ean)) {
                continue;
            } else if (!(ean.length === 13 && /[0-9]{13}/g.test(ean))) { 
                outputArray.push(ean);
            } 
        }
        return outputArray;
    }
}