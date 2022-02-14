
//handle deposit button event
document.getElementById('deposite-button').addEventListener('click', function () {
    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);

    //update deposit total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositText = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositeTotal = previousDepositAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposite input field
    depositeInput.value = '';
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the amount withdrawn
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear the withdraw input field
    depositeInput.value = '';
})