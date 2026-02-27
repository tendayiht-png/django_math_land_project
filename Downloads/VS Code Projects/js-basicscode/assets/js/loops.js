// ---------------------------------------
// LOOP NUMBER 1
console.log("the loops file is working")

// i++ actually means i = i+1 
// i.e. increase the value of i by 1


for (let i = 1; i <= 5; i++) {
  console.log(i);
}













// ---------------------------------------
// LOOP NUMBER 2

let fruits = ["apple", "banana", "orange"];

// fruits[0] == apple
// fruits[1] == banana
// fruits[2] == orange

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}






// ---------------------------------------
// LOOP NUMBER 3

// i-- actually means i = i-1
// i.e take one away from the value of i

for (let i = 5; i > 0; i--) {
  console.log(i);
}








// ---------------------------------------
// LOOP NUMBER 4



let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}









// ---------------------------------------
// LOOP NUMBER 5

let isLoading = true;

while (isLoading) {
  console.log("Loading...");

  isLoading = false; // stops the loop
}