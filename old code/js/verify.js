// verify the EANs in the input array 
function getVerifyEAN(inputArray) {
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