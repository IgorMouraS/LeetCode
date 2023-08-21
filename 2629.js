let compose = function(functions) {
	return function(x) {
        return functions.reduceRight((acc, curr) => curr(acc), x);
    }
};

let teste = compose([x => x + 1, x => x * x, x => 2 * x], 4);

console.log(result);