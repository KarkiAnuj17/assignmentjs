
// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John Doe', age: 30 };
function ageGroup(person) {
    if (person.age<= 12)
      {return 'Child';}
    else if (person.age <= 19) 
      {return 'Teen';}
    else if (person.age <= 59) 
      {return 'Adult';}
    else
      {return 'Senior';}
}

console.log(ageGroup(person1));


 
// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
function totalNumber(inventory)
{
  let sum = 0
Object.values(inventory).forEach((item)=>{
  sum =sum + item
})
return sum
}
console.log(totalNumber(inventory2))

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
function names(students){
  return Object.values(students)
}
console.log(names(students3))
// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
function values(details){
  return 'name' in details && 'age' in details && 'city' in details
}
console.log(values(details4))
// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
function averagePrice(products){
  return (products.product1.price+products.product2.price+products.product3.price)/3
}
console.log(averagePrice(products5))

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
function highestScore(scores){
  let number=Object.values(scores)
  let max = Math.max(...number )
  return max
}
console.log(highestScore(scores6))

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
function averageSalary(employees){
  return (employees.emp1.salary+employees.emp2.salary+employees.emp3.salary)/3
}
console.log(averageSalary(employees7))

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
function sortedArray(data){
    const swapped = Object.entries(data).map(
      ([key, value]) => [value, key]
    );
    return Object.fromEntries(swapped);
  }
let output = sortedArray(data8)
console.log(Object.keys(output))
 
// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
function totalCost(order){
  return order.quantity * order.price
}
console.log(totalCost(order9))

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
function totalAmount(expenses){
  let sum = 0
  Object.values(expenses).forEach((item)=>{
    sum =sum + item
  })
  return sum
}
console.log(totalAmount(expenses10))