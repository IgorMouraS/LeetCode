let compose = function(functions) {
	return function(x) {

        let result = x;
        functions.reverse();

        for(fn of functions){
            result = fn(result);
        }

        return result;
    }
};

let teste = compose([x => x + 1, x => x * x, x => 2 * x]);
let result = teste(4);

console.log(result);