//grabs button from document and puts them in const button
const buttons= document.querySelectorAll('button')
//grabs .screen and puts them in const screenDisplay
const screenDisplay = document.querySelector('.screen')

//hook event listeners to buttons

//puts in empty array, use let because eventualy want to clear
let calculation=[]


//callback for event listener listener
function calculate(button){
const value = button.textContent //grabs just text without tags and puts in value 
if(value === "CLEAR"){
    calculation = []
    screenDisplay.textContent = "."
} else if (value === "="){
    screenDisplay.textContent = eval(accumalativeCalculation)
}else{
    //pushes data to screen
    calculation.push(value)
    accumalativeCalculation = calculation.join('')//join removes comma 
    screenDisplay.textContent = accumalativeCalculation
}

    


}
 



//adds click eventlistener to listen for clicks on button
buttons.forEach(button => button.addEventListener('click', ()=> calculate(button)))