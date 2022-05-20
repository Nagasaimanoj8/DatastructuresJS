// 2. Sort the array
let sortedArray = numArray.sort();
console.log("Sorted array:");
console.log(sortedArray);
console.log("Using sorting\n2nd largest element: " + sortedArray[(sortedArray.length - 2)] + "\n2nd smallest element: " + sortedArray[1]);
// 3. Prime factors of a number
const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the number: '));
let primeFactorsArr = [];
// Print the number of 2s that divide n
while (n % 2 == 0) {
    primeFactorsArr.push(2);
    n = n / 2;
}
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= n; i = i + 2) {
    // While i divides n, print i and divide n  
    while (n % i == 0) {
        primeFactorsArr.push(i);
        n = n / i;
    }
}
// This condition is to handle the case when after division by 2 n  
// is a prime number greater than 2  
if (n > 2)
    primeFactorsArr.push(n);
console.log("Prime factors:")
console.log(primeFactorsArr);


// 4. Find triplets whose sum is 0

let arr = [0, -1, 2, -3, 1];
n = arr.length;
console.log("Triplets with sum 0 are:")
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if (arr[i] + arr[j] + arr[k] == 0) {
                console.log(arr[i] + "," + arr[j] + "," + arr[k] + "\n");
            }
        }
    }
}

// 5. Find repeated digits between 0-100

repeatedDigitsArr = [];
for (let i = 10; i < 100; i++) {
    let onesDigit = i % 10;
    let tensDigit = (i - onesDigit) / 10;
    if (onesDigit == tensDigit) {
        console.log(i);
        repeatedDigitsArr.push(i);
    }
}
console.log("Repeated digits content:")
console.log(repeatedDigitsArr);