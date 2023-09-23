function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
      return true;
  }
   function* generatePrimes(limit) {
    if (limit < 2) return;
    yield 2;
  
    for (let num = 3; num <= limit; num += 2) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }
  const limit = 40; 
  const primeGenerator = generatePrimes(limit);
  
  console.log(`Prime numbers up to ${limit}:`);
  for (const prime of primeGenerator) {
    console.log(prime);
  }
  