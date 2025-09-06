//Checking if a variable is a number or not;

function checkNum(num){
    if(typeof(num) === 'number'){
        console.log("Given variable is a Number")
    }else{
        console.log("Given variable is not a Number")
    }
}

checkNum(33)

function checkNum1(num) {
    if (num % 1 === 0 || num % 1 !== 0) {
        console.log("Given variable is a Number");
    } else {
        console.log("Given variable is not a Number");
    }
}

checkNum1(22)
checkNum1("sds")