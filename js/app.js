let incomeFeild = document.getElementById("income");
let parseIncome = parseInt(incomeFeild.value);
let foodFeild = document.getElementById("food");
let rentFeild = document.getElementById("rent");
let clothesFeild = document.getElementById("clothes");
let expenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let remaningBalance = document.getElementById("remaning-balance");



 //   calculate fuction
function calculate() {

    if (isNaN(incomeFeild.value) == false && isNaN(foodFeild.value) == false && isNaN(rentFeild.value) == false && isNaN(clothesFeild.value) == false) {

        let parseFood = parseInt(foodFeild.value);
        let parseRent = parseInt(rentFeild.value);
        let parseClothe = parseInt(clothesFeild.value);
        let totalExpenses =  parseFood + parseRent + parseClothe;

        if (parseFood >= 0 && parseRent >= 0 && parseClothe >= 0 && parseIncome >= 0) {

            if (totalExpenses < parseIncome) {

                expenses.innerText = totalExpenses;
                let restBalace = parseInt(incomeFeild.value) - totalExpenses;
                balance.innerText = restBalace;
                remaningBalance.innerText = restBalace;

            } else {

                alert("Your Expenses is more than your income")
            }
            
        } else {
            alert("Wrong Input!! Please Enter Positive Value")
        }

    } else {
        alert("Wrong Input!! Please Enter Number")
    }
}

// savings Fuction
function savingsFuction() {

    let percentage = document.getElementById("save");
    let parsePercentage = parseInt(percentage.value);
    let percentageAccordingToIncome = (parsePercentage / 100) * parseIncome;
    let savaingAmount = (parsePercentage / 100) * parseInt(balance.innerText);

    if (isNaN(percentage.value) == false) {

        if (parsePercentage >= 0) {
            if (percentageAccordingToIncome < parseInt(balance.innerText)) {
                document.getElementById("savings-balace").innerText = savaingAmount;
                remaningBalance.innerText = parseInt(balance.innerText) - savaingAmount;
        
            } else {
                alert("Your Saving is more than your Available balance")
            }
        } else {
            alert("Wrong Input!! Please Enter Positive Value")
        }

    } else {
        alert("Wrong Input!! Please Enter Number");
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
