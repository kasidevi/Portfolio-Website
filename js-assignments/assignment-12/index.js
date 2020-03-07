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

table.style.visibility = 'hidden';
class ATM {
    constructor(mode) {
        this.mode = '';
        this.balance = parseInt(0);
        this.transactionHistory = parseInt(0);
    }
    makeWithdrawal() {
        this.mode = 'WITHDRAW';
        this.UI();
        let amount = enterAmountToWithdraw.value;
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(this);
            this.tableFormat(this.mode, amount, this.balance);
        }
        else if (isNaN(amount)) {}
        else {
            //  insufficientBalance.innerHTML = 'Insufficient balance';
            insufficientBalance.style.display = 'flex';
        }
    }
    makeDeposit() {
        this.mode = 'DEPOSIT';
        this.UI(this.mode);
        let amount = parseInt(enterAmountToDeposit.value);
        if (amount >= 0) {
            this.balance += amount;
            console.log(this);
            this.tableFormat(this.mode, amount, this.balance);
        }
    }
    submitDeposit() {
        this.makeDeposit();
        enterAmountToDeposit.value = '';
    }
    submitWithdraw() {
        this.makeWithdrawal();
        enterAmountToWithdraw.value = '';
    }
    showBalance() {
        this.mode = 'SHOW_BALANCE';
        this.UI();
        currentBalance.innerHTML = `Current Balance: Rs ${this.balance}`;
    }
    showHistory() {
        this.mode = 'HISTORY';
        this.UI();
    }
    tableFormat(transactionmode, enteredAmount, currentBalanceInRs) {
        this.transactionHistory += parseInt(1);
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
    UI() {
        switch (this.mode) {
            case 'DEPOSIT':
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
            case 'WITHDRAW':
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

            case 'SHOW_BALANCE':
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

                break;

            case 'HISTORY':
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

                if (this.transactionHistory != 0) {
                    enterAmountToDeposit.style.display = 'none';
                    submitButtonForDeposit.style.display = 'none';
                    enterAmountToWithdraw.style.display = 'none';
                    submitButtonForWithdraw.style.display = 'none';
                    currentBalance.style.display = 'none';
                    table.style.visibility = 'visible';
                    insufficientBalance.style.display = 'none';
                    noTransactions.style.display = 'none';
                }
                else {
                    enterAmountToDeposit.style.display = 'none';
                    submitButtonForDeposit.style.display = 'none';
                    enterAmountToWithdraw.style.display = 'none';
                    submitButtonForWithdraw.style.display = 'none';
                    currentBalance.style.display = 'none';
                    table.style.visibility = 'hidden';
                    insufficientBalance.style.display = 'none';
                    noTransactions.style.display = 'flex';
                }
                break;

            default:
                throw Error('Invalid values');
        }
    }
}
let AtmInstance = new ATM();

depositButton.onclick = () => {
    AtmInstance.makeDeposit();
};
submitButtonForDeposit.onclick = () => {
    AtmInstance.submitDeposit();
};
submitButtonForWithdraw.onclick = () => {
    AtmInstance.submitWithdraw();
};
withdrawButton.onclick = () => {
    AtmInstance.makeWithdrawal();
};
balanceButton.onclick = () => {
    AtmInstance.showBalance();
};
historyButton.onclick = () => {
    AtmInstance.showHistory();
};
