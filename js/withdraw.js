/* 
1. add event handler with the withdraw button
2. get the withdraw ammount from the withdraw input field 
2.5.also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4.calculate total withdraw ammount
4.5.set total withdraw ammount
5.get the previous balance total
6.calculate new balance total
6.5.set the enw balance total

7.clear the input field

*/
//  step -01:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step -02
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmmountString = withdrawField.value;
  const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

  //   step -03
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //   step -07
  withdrawField.value = "";

  if (isNaN(newWithdrawAmmount)) {
    alert("Please provide a valid number");
    return;
  }

  //   step -05
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmmount > previousBalanceTotal) {
    alert("Baap er Bank e Eto Taka Nai");
    return;
  }

  //   step -04
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //   step -06
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
