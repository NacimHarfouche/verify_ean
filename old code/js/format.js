// format the array
function getformateArray(inputArray) {
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