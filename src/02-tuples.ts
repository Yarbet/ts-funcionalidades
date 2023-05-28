const prices: (number | string)[] = [1,2,3, 'as'];
prices.push(1);
prices.push('as');


let user: [string, number, boolean];
//user = ['yarbet', 15];
//user = ['12', 12];

user = ['yarbet', 12, true];
const [username, age] = user;
console.log(username);
console.log(age);
