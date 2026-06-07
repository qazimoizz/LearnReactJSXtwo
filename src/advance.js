// //?objects literals 

// let n = "student";
// const obj  ={
// [n]: "qazimoiz",
// course: "b-tech",
// detail :function(){
// return `${this.student} is the student of ${this.course}`
// }
// }
// console.log(obj.detail());

// //? destructuring array methods 

// const destructure = ["qazi", 21, "BSCS"]

// const [name, age, course] = destructure;

// console.log(name);
// console.log(age);
// console.log(course);

// function myFunc([name, age, city]){
// console.log(name);
// console.log(age);
// console.log(city);
// }
// myFunc(["qazi", 21 ,"karachi"] );

// const arr = ["hamza", "BA", "karachi"] 

// const  [fname , ...args] = arr;
// console.log(fname);
// console.log(args);

//? destructuring object methods

const obj ={
    name: "younus",
    age: 25,
    salary: 25000,
    city: "baltistan"
}
// const {name,age,salary,city} = obj1;
// console.log(name);
// console.log(age);
// console.log(salary);
// console.log(city);
const {name : n, age:a, salary: s, city: c} = obj;
console.log(n);
console.log(a);
console.log(s);
console.log(c);


