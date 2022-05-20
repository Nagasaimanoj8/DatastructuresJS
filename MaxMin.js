const array = new Array(); //created empty array
for (let i = 0; i < 5; i++) {
    let randomCheck = Math.floor(Math.random() * 900 + 100);
    console.log("Random number is:" + randomCheck);
    array.push(randomCheck); //pushes to empty array
}
console.log("Maximum number is: " + Math.max(...array));
console.log("Minimum number is: " + Math.min(...array));