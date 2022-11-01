const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop
let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x+=1;
}

//for loop
for (ingredient of ingredients) {
  console.log(ingredient);
}

//reverse for loop
for (let y=ingredients.length-1; y>=0; y--) {
  console.log(ingredients[y]);
}
