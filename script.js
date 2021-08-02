document.getElementById('phoneItem-increase').addEventListener('click', function(){
    productCounter('phoneItem', true);
})

document.getElementById('phnItem-decrease').addEventListener('click', function(){
    productCounter('phoneItem', false);
})
document.getElementById('caseItem-increase').addEventListener('click', function(){
    productCounter('caseItem', true);
})

document.getElementById('caseItem-decrease').addEventListener('click', function(){
    productCounter('caseItem', false);
})

function productCounter(productType, isIncreased){
    const quantityCount = inputValue(productType);
    let quantity = quantityCount;
    if(isIncreased == true){
        quantity = quantityCount + 1;
    }
    else if(isIncreased == false && quantity > 0){
        quantity = quantityCount - 1;
    }
    document.getElementById(productType + '-count').value = quantity;
    let price = 0;
    if(productType == 'phoneItem'){
        price = quantity * 1219;
    }
    else if(productType == 'caseItem'){
        price = quantity * 59;
    }
    document.getElementById(productType + "-price").innerText = price;
    calculateTotal();
}

function calculateTotal(){
    const phnCounter = inputValue('phoneItem');
    const caseCounter = inputValue('caseItem');
    const subTotalPrice = phnCounter * 1219 + caseCounter * 59;
    document.getElementById('subTotal').innerText = subTotalPrice;

    const tax = subTotalPrice * 0.1;
    document.getElementById('tax').innerText = tax;

    const total = subTotalPrice + tax;
    document.getElementById('total').innerText = total;
}

function inputValue(productType){
    const productCounter = parseInt(document.getElementById(productType + '-count').value);
    return productCounter;
}
