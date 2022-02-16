const chair = 25;
const daw = 68;
const loungo = 90;


function  clickFunction(sum, id, price) {
    let feild = document.querySelector(id+"-input");
    
    if (sum == true) {
        feild.value ++;
    } else if(feild.value > 0){
        feild.value --;

    }
    document.querySelector(id+"-price").innerText = feild.value * price;
    calcalut()

}

function calcalut(){
    let chairTotal = document.querySelector("#chair-price").innerText;
    let dawTotal = document.querySelector("#daw-price").innerText;
    let loungoTotal = document.querySelector("#loungo-price").innerText;
    let subTotal = document.querySelector("#sub-total")
    subTotal.innerText = parseInt(chairTotal) + parseInt(dawTotal) + parseInt(loungoTotal);
    let subTotalConvert = parseInt(subTotal.innerText);
    let tax = ((5 / 100) * subTotalConvert).toFixed(2);
    document.querySelector("#tax").innerText = tax;
    document.querySelector("#total").innerText = subTotalConvert + parseInt(tax);
     
}

// chair 
document.querySelector("#chair-plus").addEventListener("click", function  (e) {
    let sum = true;
    clickFunction(sum, "#chair", chair)
})

document.querySelector("#chair-minus").addEventListener("click", function  (e) {
    let sum = false;
    clickFunction(sum, "#chair", chair)
})



// daw 
document.querySelector("#daw-plus").addEventListener("click", function  (e) {
    let sum = true;
    clickFunction(sum, "#daw", daw)
})

document.querySelector("#daw-minus").addEventListener("click", function  (e) {
    let sum = false;
    clickFunction(sum, "#daw", daw)
})

// loungo
document.querySelector("#loungo-plus").addEventListener("click", function  (e) {
    let sum = true;
    clickFunction(sum, "#loungo", loungo)
})

document.querySelector("#loungo-minus").addEventListener("click", function  (e) {
    let sum = false;
    clickFunction(sum, "#loungo", loungo)
})
