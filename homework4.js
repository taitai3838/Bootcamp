const js = require("./homework1-4.json")

let brownCount = 0 , blueCount = 0 , greenCount = 0 , maleCount = 0 , femaleCount = 0 

for(i in js){
    if(js[i].eyeColor == "brown"){
        brownCount++
    }else if(js[i].eyeColor == "blue"){
        blueCount++
    }else if(js[i].eyeColor == "green"){
        greenCount++
    }

    if(js[i].gender == "male"){
        maleCount++
    }else if(js[i].gender == "female"){
        femaleCount++
    }
    let totalFriends = 0 ; 

    for(let j = 0 ; j <= js[i].friends.length-1;j++){
        console.log(js[i].friends[j])
        let friendsCount = 0 ;
        friendsCount++
        totalFriends += friendsCount
    }

    js[i].friendsCount = totalFriends
    console.log("friendsCount",js[i].friendsCount)

}

let color = {"brown":brownCount,"blue":blueCount,"green":greenCount}
let gender = {"male":maleCount,"female":femaleCount}

console.log(color)
console.log(gender)