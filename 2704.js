var expect = function (val) {

    var toBe = function (val) {
        let array = [];
        array.push(val);

        if (array.length > 0) {
            for (let a in array) {
                if (array[a] === array[a - 1]) {
                    return true;
                }else{
                    return "Not Equal";
                }
            }
        }else if( array.length === 0){
            return true;
        }else{
            return false;
        }
    }

    var notToBe = function () {
        let array = [];
        array.push(val);

        if (array.length > 0) {
            for (let a in array) {
                if (array[a] !== array[a - 1]) {
                    return true;
                }else{
                    return "Equal";
                }
            }
        }else if( array.length === 0){
            return true;
        }else{
            return false;
        }
    }

    obj = {
        "toBe": toBe,
        "notToBe": notToBe,
    }

    return obj;
};

expect(5).toBe(5);