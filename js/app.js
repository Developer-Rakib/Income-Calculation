// element select 
let incomeFeild = document.getElementById("income");
let foodFeild = document.getElementById("food");
let rentFeild = document.getElementById("rent");
let clothesFeild = document.getElementById("clothes");
let expenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let remaningBalance = document.getElementById("remaning-balance");
let errorparentElement = document.getElementById("error-messgae");
let errorSavingElement = document.getElementById("error-savings");



// erro handle fucntion 
function errorHanble (messgae , parentId, cureentId) {
    let errorElement =  document.getElementById(parentId);
    let errorText =  document.getElementById(cureentId);
    errorText.innerText = messgae;
    errorElement.style.display = "block";
}


// empty value fucntion
function emptyFucntion () {
    incomeFeild.value = "";
    foodFeild.value = "";
    rentFeild.value = "";
    clothesFeild.value = "";
}




 //   calculate fuction
function calculate() {

    // error handle 
    if (isNaN(incomeFeild.value) == false && isNaN(foodFeild.value) == false && isNaN(rentFeild.value) == false && isNaN(clothesFeild.value) == false) {
        let parseFood = parseInt(foodFeild.value);
        let parseRent = parseInt(rentFeild.value);
        let parseClothe = parseInt(clothesFeild.value);
        let totalExpenses =  parseFood + parseRent + parseClothe;

        if (parseFood >= 0 && parseRent >= 0 && parseClothe >= 0) {

            if (totalExpenses < parseInt(incomeFeild.value)) {

                expenses.innerText = totalExpenses;
                let restBalace = parseInt(incomeFeild.value) - totalExpenses;
                balance.innerText = restBalace;
                errorparentElement.style.display = "none";

            } else {
                errorHanble("Your Expenses is more than your income", "error-messgae", "error-text")
            }
            
        } else {

            errorHanble("Wrong Input!! Please Enter Positive Value", "error-messgae", "error-text")
            emptyFucntion();

        }

    } else {
        errorHanble("Wrong Input!! Please Enter Number", "error-messgae", "error-text")
        emptyFucntion();

    }
}



// savings Fuction
function savingsFuction() {

    let percentage = document.getElementById("save");
    let parsePercentage = parseInt(percentage.value);
    let percentageAccordingToIncome = (parsePercentage / 100) * parseInt(incomeFeild.value);

    if (isNaN(percentage.value) == false) {

        if (parsePercentage >= 0) {
            if (percentageAccordingToIncome < parseInt(balance.innerText)) {
                document.getElementById("savings-balace").innerText = percentageAccordingToIncome;
                remaningBalance.innerText = parseInt(balance.innerText) - percentageAccordingToIncome;
                errorSavingElement.style.display = "none";
        
            } else {
                errorHanble("Your Saving is more than your Available balance", "error-savings", "error-save")
            }
        } else {
            errorHanble("Wrong Input!! Please Enter Positive Value", "error-savings", "error-save")
        }

    } else {
        errorHanble("Wrong Input!! Please Enter Number", "error-savings", "error-save")
    }
}




// calculate
document.getElementById("calc-submit-btn").addEventListener("click", function 
 () {
    calculate();
    
})


// savings
document.getElementById("savings-btn").addEventListener("click", function 
 () {
    savingsFuction()
})
