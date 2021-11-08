// Button variables
let numberNine = document.getElementById("btn-nine")
let numberEight = document.getElementById("btn-eight")
let numberSeven = document.getElementById("btn-seven")
let numberSix = document.getElementById("btn-six")
let numberFive = document.getElementById("btn-five")
let numberFour = document.getElementById("btn-four")
let numberThree = document.getElementById("btn-three")
let numberTwo = document.getElementById("btn-two")
let numberOne = document.getElementById("btn-one")
let numberZero = document.getElementById("btn-zero")




// Operator varables
let plus = document.getElementById("btn-plus")
let minus = document.getElementById("btn-minus")
let multiply = document.getElementById("btn-multiply")
let devide = document.getElementById("btn-devide") 
let equals = document.getElementById("btn-equalls")


// The result form
let results = document.getElementById("result")


function calculator (number){

    if(results.value=="undefined"){
        results.value=""
    }
    results.value += number;
}

// Onclick event listner for all buttons
numberNine.addEventListener ("click", function(){
    calculator(9);
    })
numberEight.addEventListener ("click", function(){
        calculator(8);
    })
numberSeven.addEventListener ("click", function(){
        calculator(7);
    })  
numberSix.addEventListener ("click", function(){
        calculator(6);
    }) 
numberFive.addEventListener ("click", function(){
        calculator(5);
    })
numberFour.addEventListener ("click", function(){
        calculator(4);
    })
numberThree.addEventListener ("click", function(){
        calculator(3);
    })
numberTwo.addEventListener ("click", function(){
        calculator(2);
    })
numberOne.addEventListener ("click", function(){
        calculator(1);
    })
numberZero.addEventListener ("click", function(){
        calculator(0);
    })