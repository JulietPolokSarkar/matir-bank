//DRI
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const newText = input.value;
    const newAmount = parseFloat(newText);
    //clear the deposite input field
    input.value = '';
    return newAmount;
}

function updateTotalField(inputId, newAmount) {
    const depositeTotal = document.getElementById(inputId);
    const previousDepositText = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositeTotal.innerText = previousDepositAmount + newAmount;
}

function getPreviousBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}

function updateBalanceTotal(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    const previousBalanceTotal = getPreviousBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + newAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - newAmount;
    }
}


//handle deposit button event
document.getElementById('deposite-button').addEventListener('click', function () {
    //get the amount deposited
    // const depositeInput = document.getElementById('deposite-input');
    // const newDepositeText = depositeInput.value;
    // const newDepositeAmount = parseFloat(newDepositeText);

    // const newDepositeAmount = getInputValue('deposite-input');

    //update deposit total
    // const depositeTotal = document.getElementById('deposite-total');
    // const previousDepositText = depositeTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositeTotal = previousDepositAmount + newDepositeAmount;
    // depositeTotal.innerText = newDepositeTotal;

    // updateTotalField('deposite-total', newDepositeAmount);

    //update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    // balanceTotal.innerText = newBalanceTotal;

    // updateBalanceTotal(newDepositeAmount, true);


    //clear the deposite input field
    // depositeInput.value = '';

    const newDepositeAmount = getInputValue('deposite-input');
    if (newDepositeAmount > 0) {
        updateTotalField('deposite-total', newDepositeAmount);
        updateBalanceTotal(newDepositeAmount, true);
    }
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the amount withdrawn
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdrawText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(newWithdrawText);

    // const newWithdrawAmount = getInputValue('withdraw-input');

    //update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // updateTotalField('withdraw-total', newWithdrawAmount);

    //update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;

    // updateBalanceTotal(newWithdrawAmount, false);


    //clear the withdraw input field
    // depositeInput.value = '';

    const newWithdrawAmount = getInputValue('withdraw-input');
    const previousBalance = getPreviousBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < previousBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalanceTotal(newWithdrawAmount, false);
    }
})