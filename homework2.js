const peopleSalary = [
    {
        "id": 1001,
        "firstname": "Luke",
        "lastname": "Skywalker",
        "company": "Walt Disney",
        "salary": 40000
    },
    {
        "id": 1002,
        "firstname": "Tony",
        "lastname": "Stark",
        "company": "Marvel",
        "salary": 1000000
    },
    {
        "id": 1003,
        "firstname": "Somchai",
        "lastname": "Jaidee",
        "company": "Love2work",
        "salary": 20000
    },
    {
        "id": 1004,
        "firstname": "Monkey D",
        "lastname": "Luffee",
        "company": "One Piece",
        "salary": 9000000        
    }
]

const arr = [];

for(i in peopleSalary){
    let id = peopleSalary[i].id
    let firstname = peopleSalary[i].firstname
    let lastname = peopleSalary[i].lastname
    let salary = peopleSalary[i].salary
    let newSalary = { id , firstname , lastname , salary } 
    arr.push(newSalary)
}

console.log("New arr without Company" , arr)

for(i in peopleSalary){
    console.log(Object.keys(peopleSalary[i]))
}

