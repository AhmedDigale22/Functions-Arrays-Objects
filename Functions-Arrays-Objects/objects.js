// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
};

// Write your intern objects here:
const information = {
  person1: {
    id: 124565,
    email: "mmelloy0@psu.edu",
    firstName: "Mitzi",
    gender: "F",
  },
  person2: {
    id: 137866,
    email: "kdiben1@tinypic.com",
    firstName: "Kennan",
    gender: "M",
  },
  person3: {
    id: 147934,
    email: "kmummery2@wikimedia.org",
    firstName: "Keven",
    gender: "M",
  },
  person4: {
    id: 153467,
    email: "gmartinson3@illinois.edu",
    firstName: "Gannie",
    gender: "M",
  },
  person5: {
    id: 124567,
    email: "adaine5@samsung.com",
    firstName: "Antonietta",
    gender: "F",
  },
};
console.log(information.person1);
console.log(information.person2);
console.log(information.person3);

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(information.person1.firstName);

// Kennan's ID
console.log(information.person2.id);
// Keven's email
console.log(information.person3.firstName);
// Gannie's name
console.log(information.person4.firstName);
// Antonietta's Gender
console.log(information.person5.gender);
// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(`Hello, my name is ${information.person2.firstName}!`);

//  loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.

console.log(
  `${information.person5.firstName} multiplied by 3 and 4 is ${multiply(3, 4)}`
);
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  Name: "Susan",
  age: 70,
  child: {
    Name: "George",
    age: 50,
    grandchild: {
      Name: "Sam",
      age: 30,
    },
  },
};

// Log the parent object's name
console.log(parent);

// Log the child's age
console.log(parent.child.Name);

// Log the name and age of the grandchild
console.log(parent.child.grandchild.Name);
// Have the parent speak
console.log(
  `parent: Hello, my children ${parent.child.Name} and ${parent.child.grandchild.Name} How are you doind today?`
);
// Have the child speak
console.log(` child: We are our good our dear mother, How are you too? `);
// Have the grandchild speak
console.log(` grandchild: We missed you grandy, how have you been? `);
