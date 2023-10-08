const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let highPrice = 0 ;
  let highName =[];

  for(let i in products){
      if(products[i].price > highPrice){
      highPrice=products[i].price
      highName.push("name : "+ products[i].name)
      highName.push(", price : " + products[i].price)
   }
  }
  return highName
}

let Exercise3 = getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
console.log(Exercise3)