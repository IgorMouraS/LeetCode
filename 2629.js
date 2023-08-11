var compose = function(functions) {
	return function(x) {
        fn(x) = f(g(h(x)))
        return fn(x);
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x], x = 4)

console.log(fn);