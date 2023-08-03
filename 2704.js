let expect = function (val) {
    let value = val;
    let obj = {};

    let toBe = function (val) {
        let toBeValue = val;
        if (toBeValue === value) {
            return true ;
        } else {
            throw new Error("Not Equal");
        }
    }

    let notToBe = function (val) {
        let notToBeValue = val;
        if (notToBeValue !== value) {
            return true;
        } else {
            throw new Error("Equal");
        }
    }

    return obj = {toBe, notToBe};
};

let teste = expect(5).toBe(5);
console.log(teste)