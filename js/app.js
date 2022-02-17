// element select 
let incomeFeild = document.getElementById("income");
let foodFeild = document.getElementById("food");
let rentFeild = document.getElementById("rent");
let clothesFeild = document.getElementById("clothes");
let expenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let remaningBalance = document.getElementById("remaning-balance");
let errorElement = document.getElementById("error-messgae");
let errorText = document.getElementById("error-text");
let errorSavingElement = document.getElementById("error-savings");
let errorSave = document.getElementById("error-save");



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
                errorElement.style.display = "none";

            } else {

                errorText.innerText = "Your Expenses is more than your income";
                errorElement.style.display = "block";
            }
            
        } else {
            errorText.innerText = "Wrong Input!! Please Enter Positive Value";
            errorElement.style.display = "block";
            emptyFucntion();

        }

    } else {
        errorText.innerText = "Wrong Input!! Please Enter Number";
        errorElement.style.display = "block";
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
                errorSave.innerText = "Your Saving is more than your Available balance";
                errorSavingElement.style.display = "block";
            }
        } else {
            errorSave.innerText = "Wrong Input!! Please Enter Positive Value";
            errorSavingElement.style.display = "block";
        }

    } else {
        errorSave.innerText = "Wrong Input!! Please Enter Number";
        errorSavingElement.style.display = "block";
    }
}

// empty value fucntion
function emptyFucntion () {
    incomeFeild.value = "";
    foodFeild.value = "";
    rentFeild.value = "";
    clothesFeild.value = "";
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
