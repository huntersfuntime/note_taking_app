let square = (x) => {
    let result = x * x;
    return result;
};

let square2 = x => x * x;

console.log(square(9));
console.log(square(3));


// Nuances between regular and arrow functions.


let user = {
    name: 'Hunter',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);                   // array like object
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);