// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;

// console.log(sales, course, is_published);

// Using any type that will avoid type checking so we have to avoid any type.

// let level;
// level = 1 ;
// level = "a" ;

/** Type Script Checking */

// function render(document) {
//   console.log(document);
// }

/** Array */

// let  numbers: number[] = [] ;

// numbers [0] = 1;

// Cool feature of typescript and that is code completion or
//  intellisense .

// numbers.forEach(n => n.toExponential).

// Fixed length array
// id:1, name:"Mudsir"

// Tuples are usefull for key value pairs two elements.
// let user: [number, string] = [1, "Mosh"];

// user.push(1);

// enum

// const small = 1;
// const medium = 2;
// const large = 3;

// Pascal Case
// If we are using const code is optimized after compilation .
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// ********* Using function *********

// function calculateTax(income: number, taxYear = 2023): number {
//   if (taxYear < 50_000) {
//     return income * 1.2;
//     return income * 1.3;
//   }
// }

// Call function.

// calculateTax(10_000, 2022);

// ********* Using Objects with Type alias *********

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  //  readonly modifier prevents from modifying.
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ********* Using Union Types *********

// Purely for the compiler to  do  is type checking.
//  like number | string (annotations)
function KgToLbs(weight: number | string): number {
  // Narrowing Technique
  if (typeof weight === "number") return weight * 2.2;
  // parseInt convert weight to integer.
  else return parseInt(weight) * 2.2;
}

KgToLbs(10);
KgToLbs("10Kg");

// ********* Using Intersection Types *********

// Using type alias
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ********* Using  Literal Types can be number/ String (exact, specific)  *********

type Quantity = 50 | 100 | 500;
let quantity: Quantity = 500;

type Metric = "Mudsir" | "Ali" | "";
const Metrics: Metric = "";

// ********* Using Nullable Types ******
//   *** Tsc is very strict using ***
// ** Null and Undefied values.

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hole in Type");
}

greet(null);

// ********* Using Optional Chaining ******
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// ******* Optional property access operator

console.log(customer?.birthday);
