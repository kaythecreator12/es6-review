import { sum, User, getUserinfo, checkEven, courseMap} from './tools.js';

// Testing "sum"
console.log(sum(20,31));

//Testing Class
const user3 = new User ('Mike', 'Falana', 22, 3);
console.log(user3.display);

// Testing Async
getUserinfo(5).then(console.log);
getUserinfo(1).then(console.log);

//Testing Promise
checkEven(4).then(console.log).catch(console.error); 
checkEven(5).then(console.log).catch(console.error); 

//Testing Maps

console.log(courseMap.get("FM301"));

