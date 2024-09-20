// add money
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const valueOfAmount = getValueOfId('amount');
    const valueOfPin = getValueOfId('pinNum')
    if(isNaN(valueOfAmount)){
        alert('please input valid information')
        return;
    }
    if (valueOfPin === 1234) {
        const balance = idTextValueCapture('current-balance');
        const newBalance = balance + valueOfAmount;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${valueOfAmount} Tk. Balance: ${newBalance}`

        document.getElementById('transaction-history').appendChild(p);
    }
    else {
        alert('Wrong Information')
    }
})

// cash out
document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getValueOfId('cashOutAmount');
    const pin = getValueOfId('cashOutPinNum');
    if(isNaN(amount)){
        alert('please input valid information');
        return;
    }
   
    if (pin === 1234) {
        const balance = idTextValueCapture('current-balance');

        if(amount > balance){
            alert('Yo do not have enough to money to cash out')
            return;
        }
        const newBalance = balance - amount;
        document.getElementById('current-balance').innerText = newBalance;

        // add transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class ="text-2xl font-bold">Cash Out</h4>
            <p>${amount} Withdraw . New Amount: ${newBalance}</p>
        `
        document.getElementById('transaction-history').appendChild(div);
    }
    else {
        alert('Wrong Information')
    }
})


// show add money and cash out Toggle 

// document.getElementById('showCashOut').addEventListener('click' ,function(){
//     document.getElementById('cashOutForm').classList.remove('hidden');
//     document.getElementById('addMoneyForm').classList.add('hidden')
// })

// document.getElementById('showAdd').addEventListener('click' ,function(){
//     document.getElementById('addMoneyForm').classList.remove('hidden');
//     document.getElementById('cashOutForm').classList.add('hidden');
// })


// another way to use function 

document.getElementById('showCashOut').addEventListener('click', function () {
    sectionHidden('cashOutForm');
})

document.getElementById('showAdd').addEventListener('click', function () {
    sectionHidden('addMoneyForm')
})

document.getElementById('showTransaction').addEventListener('click', function () {
    sectionHidden('transaction')
})



