let fruits = ["banana", "apple", "orange"];

function showFruit() {
  let favFruit = fruits[2];

  console.log(fruits[0]);

  function myFruit() {
    console.log(favFruit);
    let leastFave = fruits[0];
  }
}

// showFruit();
// myFruit();
// console.log(leastFave);

// myFunction();
// function myFunction() {
//   console.log("Hello Justin");
// }
let thisFunction = function () {
  alert("whoa there buddy");
};

thisFunction();
