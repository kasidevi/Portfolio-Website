//Write your javascript logic here
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const balanceButton = document.getElementById('balanceButton');
const historyButton = document.getElementById('historyButton');
const enterAmountToDeposit = document.getElementById('inputTagEnterAmountDeposit');
const enterAmountToWithdraw = document.getElementById('inputTagEnterAmountWithdraw');
const submitButtonForDeposit = document.getElementById('submitButton1');
const submitButtonForWithdraw = document.getElementById('submitButton2');
const currentBalance = document.getElementById('currentBalance');
const insufficientBalance = document.getElementById('insufficientBalance');
let table = document.getElementById('table');
let noTransactions = document.getElementById('noTransactions');
let timerLeft = document.getElementById('timer');
let count = 10;
let clearTimer;
table.style.visibility = 'hidden';
class ATM {
    constructor(mode) {
        this.mode = '';
        this.balance = parseInt(0);
        this.transactionHistory = parseInt(0);
        this.count = count;
    }
    makeDeposit(count) {
        this.mode = 'deposit';
        UI(this.mode, this.transactionHistory);

        clearTimer = setInterval(() => {
            timerLeft.innerHTML = `Time Left: ${count}`;
            timerLeft.style.display = 'flex';
            count = count - 1;
            if (count < 0) {
                count = 10;
                clearInterval(clearTimer);
                timerLeft.style.display = 'none';
                enterAmountToDeposit.style.display = 'none';
                submitButtonForDeposit.style.display = 'none';
                depositButton.style.backgroundColor = ' white';
                depositButton.style.border = '1px solid #008080';
                depositButton.style.color = '#0080ff';
            }

        }, 1000);
    }
    makeWithdrawal(count) {
        this.mode = 'withdraw';
        UI(this.mode, this.transactionHistory);
    }
    submitDeposit() {
        //  this.makeDeposit();
        let re = /^\d+$/;
        let amount = enterAmountToDeposit.value;
        if (amount.match(re) || amount === '') {
            if (parseInt(amount) >= 0) {
                this.balance += parseInt(amount);
                console.log(this);
                if (amount !== '') {
                    tableFormat(this.mode, amount, this.balance);
                    this.transactionHistory += parseInt(1);
                    insufficientBalance.style.display = 'none';
                    submitButtonForDeposit.style.display = 'none';
                    timerLeft.style.display = 'none';
                    clearInterval(clearTimer);
                    enterAmountToDeposit.style.display = 'none';
                    depositButton.style.backgroundColor = ' white';
                    depositButton.style.border = '1px solid #008080';
                    depositButton.style.color = '#0080ff';

                }
            }
        }
        else {
            insufficientBalance.innerHTML = 'Enter Valid values';
            insufficientBalance.style.display = 'flex';
        }
        enterAmountToDeposit.value = '';

    }
    submitWithdraw() {
        this.makeWithdrawal();
        let re = /^\d+$/;
        let amount = enterAmountToWithdraw.value;
        if (amount.match(re) || amount === '') {
            if (parseInt(amount) <= this.balance) {
                this.balance -= parseInt(amount);
            }
            else {
                insufficientBalance.innerHTML = 'Insufficient balance';
                insufficientBalance.style.display = 'flex';
            }
        }
        else {
            insufficientBalance.innerHTML = 'Enter Valid values';
            insufficientBalance.style.display = 'flex';
        }
        enterAmountToWithdraw.value = '';
    }
    showBalance() {
        this.mode = 'showBalance';
        UI(this.mode, this.transactionHistory);
        currentBalance.innerHTML = `Current Balance: Rs ${this.balance}`;
    }
    showHistory() {
        this.mode = 'history';
        UI(this.mode, this.transactionHistory);
    }
}
// let count = 10;

// function timer(clearTimer) {
//     console.log(clearTimer)
//     timerLeft.innerHTML = `Time Left: ${count}`;
//     count = count - 1;
//     if (count <= 0) {
//         clearInterval(clearTimer);
//         return;
//     }
// }

function tableFormat(transactionmode, enteredAmount, currentBalanceInRs) {
    console.log(this.transactionHistory);
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const transactionType = document.createTextNode(transactionmode);
    const amountInRS = document.createTextNode(enteredAmount);
    const balanceInRs = document.createTextNode(currentBalanceInRs);
    td1.appendChild(transactionType);
    td2.appendChild(amountInRS);
    td3.appendChild(balanceInRs);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.appendChild(row);
}

function UI(mode, transactionHistory) {
    switch (mode) {
        case 'deposit':
            enterAmountToDeposit.style.display = 'flex';
            submitButtonForDeposit.style.display = 'flex';
            enterAmountToWithdraw.style.display = 'none';
            submitButtonForWithdraw.style.display = 'none';

            currentBalance.style.display = 'none';
            table.style.visibility = 'hidden';
            noTransactions.style.display = 'none';
            insufficientBalance.style.display = 'none';

            depositButton.style.backgroundColor = ' #0080ff';
            depositButton.style.border = '2px solid #66b3ff';
            depositButton.style.color = 'white';

            withdrawButton.style.backgroundColor = ' white';
            withdrawButton.style.border = '1px solid #008080';
            withdrawButton.style.color = '#0080ff';

            balanceButton.style.backgroundColor = ' white';
            balanceButton.style.border = '1px solid #008080';
            balanceButton.style.color = '#0080ff';

            historyButton.style.backgroundColor = ' white';
            historyButton.style.border = '1px solid #008080';
            historyButton.style.color = '#0080ff';

            break;
        case 'withdraw':
            enterAmountToDeposit.style.display = 'none';
            submitButtonForDeposit.style.display = 'none';
            enterAmountToWithdraw.style.display = 'flex';
            submitButtonForWithdraw.style.display = 'flex';
            currentBalance.style.display = 'none';
            table.style.visibility = 'hidden';
            noTransactions.style.display = 'none';
            insufficientBalance.style.display = 'none';

            depositButton.style.backgroundColor = ' white';
            depositButton.style.border = '1px solid #008080';
            depositButton.style.color = '#0080ff';

            withdrawButton.style.backgroundColor = ' #0080ff';
            withdrawButton.style.border = '2px solid #66b3ff';
            withdrawButton.style.color = 'white';

            balanceButton.style.backgroundColor = ' white';
            balanceButton.style.border = '1px solid #008080';
            balanceButton.style.color = '#0080ff';

            historyButton.style.backgroundColor = ' white';
            historyButton.style.border = '1px solid #008080';
            historyButton.style.color = '#0080ff';

            break;

        case 'showBalance':
            enterAmountToDeposit.style.display = 'none';
            submitButtonForDeposit.style.display = 'none';
            enterAmountToWithdraw.style.display = 'none';
            submitButtonForWithdraw.style.display = 'none';
            currentBalance.style.display = 'flex';
            table.style.visibility = 'hidden';
            noTransactions.style.display = 'none';
            insufficientBalance.style.display = 'none';

            depositButton.style.backgroundColor = ' white';
            depositButton.style.border = '1px solid #008080';
            depositButton.style.color = '#0080ff';

            withdrawButton.style.backgroundColor = ' white';
            withdrawButton.style.border = '1px solid #008080';
            withdrawButton.style.color = '#0080ff';

            balanceButton.style.backgroundColor = ' #0080ff';
            balanceButton.style.border = '2px solid #66b3ff';
            balanceButton.style.color = 'white';

            historyButton.style.backgroundColor = ' white';
            historyButton.style.border = '1px solid #008080';
            historyButton.style.color = '#0080ff';
            timerLeft.style.display = 'none';
            clearInterval(clearTimer);

            break;

        case 'history':
            depositButton.style.backgroundColor = ' white';
            depositButton.style.border = '1px solid #008080';
            depositButton.style.color = '#0080ff';

            withdrawButton.style.backgroundColor = ' white';
            withdrawButton.style.border = '1px solid #008080';
            withdrawButton.style.color = '#0080ff';

            balanceButton.style.backgroundColor = ' white';
            balanceButton.style.border = '1px solid #008080';
            balanceButton.style.color = '#0080ff';

            historyButton.style.backgroundColor = ' #0080ff';
            historyButton.style.border = '2px solid #66b3ff';
            historyButton.style.color = 'white';

            timerLeft.style.display = 'none';
            clearInterval(clearTimer);

            enterAmountToDeposit.style.display = 'none';
            submitButtonForDeposit.style.display = 'none';
            enterAmountToWithdraw.style.display = 'none';
            submitButtonForWithdraw.style.display = 'none';
            currentBalance.style.display = 'none';
            insufficientBalance.style.display = 'none';

            if (transactionHistory != 0) {
                table.style.visibility = 'visible';
                noTransactions.style.display = 'none';

            }
            else {
                table.style.visibility = 'hidden';
                noTransactions.style.display = 'flex';
            }
            break;

        default:
            throw Error('Invalid values');
    }
}


let AtmInstance = new ATM();

depositButton.onclick = () => {
    clearInterval(clearTimer);
    AtmInstance.makeDeposit(10);
};
submitButtonForDeposit.onclick = () => {
    AtmInstance.submitDeposit();
};
submitButtonForWithdraw.onclick = () => {
    AtmInstance.submitWithdraw();
};
withdrawButton.onclick = () => {
    clearInterval(clearTimer);
    AtmInstance.makeWithdrawal(10);
};
balanceButton.onclick = () => {
    AtmInstance.showBalance();
};
historyButton.onclick = () => {
    AtmInstance.showHistory();
};
