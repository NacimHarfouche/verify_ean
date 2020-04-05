/**
 * Class Verify an input array
 */
class VerifyArray {

    // getVerifyEAN(inputArray) {
    //     const outputArray = []
    //     for (let ean of inputArray) {
    //         let line = "";
    //         if (/.*[ean]{1}.*/ig.test(ean)) {
    //             continue;
    //         } else if (!(ean.length === 13 && /[0-9]{13}/g.test(ean))) { 
    //             outputArray.push(`line ${inputArray.indexOf(ean) + 1} : ${ean}`);
    //         }
    //     }
    //     return outputArray;
    // }

    getVerifyEAN(inputArray) {
        // create an array
        let outputArray = [];
        // loop on the input array
        for (let ean of inputArray) {
            //create an object
            let badEAN = {};
            // pass column title "ean" or "EAN"
            if (/ean{1}/ig.test(ean)) {
                continue;
            } else if (!(ean.length === 13 && /[0-9]{13}/g.test(ean))) {
                // when the ean is in error
                // add in obj the line of the ean
                badEAN.line = inputArray.indexOf(ean) + 1;
                // add in obj the ean
                badEAN.ean = ean;
                // add the type of error in message
                // verify length bigger or smaller than 13
                if (ean.length > 13 && /[a-z\%\!\#\+\&\/\,\"\'-]+/ig.test(ean)) {
                        badEAN.error = "EAN too long and contain letter(s) or characters";
                } else if (ean.length > 13) {
                        badEAN.error = "EAN too long";
                } else if (ean.length < 13 && /[a-z\%\!\#\+\&\/\,\"\'-]+/ig.test(ean)) {
                        badEAN.error = "EAN too short and contain letter(s) or characters";
                } else if (ean.length < 13) {
                    badEAN.error = "EAN too short";
                } else if (/[a-z\%\!\#\+\&\/\,\"\'-]+/ig.test(ean)) {
                    badEAN.error = "EAN contain letter(s) or characters";
                } else {
                    badEAN.error = "EAN contain some kind of error(s)";
                }
                // push the obj in array
                outputArray.push(badEAN);
            }
        }
        return outputArray;
    }
}