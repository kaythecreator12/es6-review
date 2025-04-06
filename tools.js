// Modularity

export const sum = (a,b) => {
    return a + b;
};

console.log(sum(2,3));


// Class

export class User {
    constructor(FirstName, LastName, Age, id) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.id = id;
    }

    display (){
        return `Name: ${this.FirstName + this.LastName}`;
    };
};

const user1 = new User ('Caleb', 'Ita', 20, 1);
const user2 = new User ('Rand', 'Random', 100, 2)
console.log(user1.FirstName);
console.log(user2.display());


// Async

export const getUserinfo = async (userId) => {
    const users = ['Caleb', 'Rand', 'Victor'];
    
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    if (users[userId-1]){
        return users[userId-1]
    } else {
        return "User not found";
    }
  };

  getUserinfo(2).then(console.log);
  
  // Promises

  export const checkEven = (num) => {
    return new Promise((resolve, reject) => {

        if (num % 2 === 0){
            resolve (`${num} is even`)
        } else {
            reject (`${num} is odd`)
        }
    });
  };

  checkEven(5) .then(console.log) 
  .catch(console.error); 


  // Maps
  export const courseMap = new Map();

  courseMap.set("PAU-ISM 210", "Mobile Based Tech");
  courseMap.set("IS201", "Information Systems and Society");
  courseMap.set("FM301", "Directing and Cinematography");

console.log(courseMap.get("IS201")); 
