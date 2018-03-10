// let b = {'animal':'cat'};

// console.log("b",b);

// let c = Object.assign({},b);
// console.log("c",c);
// c.animal = 'dog';

// console.log("b",b);
// console.log("c after assign",c);

// c.willy = 'shiwawa'

// console.log(c.willy)

//-------------------- JSON ------------------

const students = [
    {"firstname":"Somchai","lastname":"SudLor","age":"50"},
    {"firstname":"Somsri","lastname":"SudSuay","age":"40"},
    {"firstname":"Luke","lastname":"Skywalker","age":"60"}
  ]
 
  console.log(students[0].firstname)

  console.log(students[2].age = "120")

  let strStudent = JSON.stringify(students);
  console.log(strStudent)

  console.log(JSON.parse(strStudent))
  