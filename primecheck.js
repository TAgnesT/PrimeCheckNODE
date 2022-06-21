let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let primes = [];

function primeCheck(number) {
    if (number === 2 || number === 3) {
        primes.push(number);
        return;
    }

    if (number <= 1 || number % 2 === 0 || number % 3 === 0) {
        return;
    }
    
    for (let i = 5; i * i < number; i++) {
        if (number % i === 0) {
            return;
        }
    }

    primes.push(number);

}

numbers.forEach(number => {
    primeCheck(number);
});
console.log(primes);