let incomeFeild = document.getElementById("income");
let foodFeild = document.getElementById("food");
let rentFeild = document.getElementById("rent");
let clothesFeild = document.getElementById("clothes");
let expenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let remaningBalance = document.getElementById("remaning-balance");



 //   calculate fuction
function calculate() {

    if (isNaN(incomeFeild.value) == false && isNaN(foodFeild.value) == false && isNaN(rentFeild.value) == false && isNaN(clothesFeild.value) == false) {

        let parseIncome = parseInt(foodFeild.value);
        let parseFood = parseInt(foodFeild.value);
        let parseRent = parseInt(rentFeild.value);
        let parseClothe = parseInt(clothesFeild.value);
        let totalExpenses =  parseFood + parseRent + parseClothe;

        if (parseFood >= 0 && parseRent >= 0 && parseClothe >= 0 && parseIncome >= 0) {

            if (totalExpenses < parseInt(incomeFeild.value)) {

                expenses.innerText = totalExpenses;
                let restBalace = parseInt(incomeFeild.value) - totalExpenses;
                balance.innerText = restBalace;
                remaningBalance.innerText = restBalace;

            } else {
                
                alert("Your income is more than your Expenses ")
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
    let percentageAccordingToIncome = (parseInt(percentage.value) / 100) * parseInt(incomeFeild.value);
    let savaingAmount = (parseInt(percentage.value) / 100) * parseInt(balance.innerText);

    if (isNaN(percentage.value) == false) {
        if (percentageAccordingToIncome < parseInt(balance.innerText)) {
            document.getElementById("savings-balace").innerText = savaingAmount;
            remaningBalance.innerText = parseInt(balance.innerText) - savaingAmount;
    
        } else {
            alert("Your Saving is more than your Available balance")
        }
    } else {
        alert("Wrong Input!! Please Enter Number");
    }
}

// calculate
document.getElementById("calc-submit-btn").addEventListener("click", function 
 () {
    calculate();
    
    // incomeFeild.value = "";
    // foodFeild.value = "";
    // rentFeild.value = "";
    // clothesFeild.value = "";
})


// savings
document.getElementById("savings-btn").addEventListener("click", function 
 () {
    savingsFuction()
})
