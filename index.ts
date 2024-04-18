#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance:number = 20000;
const myId:string = "arisha khan";
const myPin:number = 4890;

console.log("Welcome to the Dubai Islamic Bank")

let idEntered = await inquirer.prompt([
  {
name: "Id",
type: "string",
message: "kindly enter your id:",
},
])
// console.log(idEntered.Id);
if(idEntered.Id === myId) {
console.log("correct ID!");
}else{console.log("Incorrect ID")}

let pinEntered = await inquirer.prompt([
  {
name: "pin",
type: "number",
message: "kindly enter your pin:",
},
])

console.log(pinEntered.pin);


if(pinEntered.pin === myPin) {
  console.log("correct PIN!");
}else {console.log("Incorrect PIN")}

let answersaccountType = await inquirer.prompt([
{name:"AccountType",
type: "list",
message: "Select your account type:",
choices: ["current Account","saving Account",]
},

{name:"transactionType",
type: "list",
message: "Select your transaction type:",
choices: ["withdrawl cash","fast cash","checkbalance"],
},
])


if(answersaccountType.transactionType === "withdrawl cash") {
  let withdrawlcashAmount = await inquirer.prompt([
{name:"amount",
type: "number",
message: "Enter your amount" 
},
  ])
  // console.log(answersaccountType.transactionType.amount);

if(myBalance > withdrawlcashAmount.amount) {
  const remainingbalance = myBalance - withdrawlcashAmount.amount
  console.log('your remaining balance is:')
  console.log(remainingbalance);
}else{
  console.log("Insufficient balance");
}
}
  if (answersaccountType.transactionType ==="fast cash") {
    let fastcashAmount = await inquirer.prompt([{
      name: "Amount",
      type: "list",
      message: "please select your amount",
      choices: ["1000","2000","3000","5000","10000"]

    },])
    // console.log(answersaccountType.transactionType.Amount );
  
    if(myBalance > fastcashAmount.Amount) {
     const remainingBalance = myBalance - fastcashAmount.Amount
     console.log('your remaining balance is:')
     console.log(remainingBalance);
    }else{
      console.log("Insufficient balance");
    }
  }

if(answersaccountType.transactionType == "checkbalance") {
  console.log('your balance is :')
  console.log(myBalance);

}


console.log("thank you...!");


