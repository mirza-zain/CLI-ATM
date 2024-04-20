#! /usr/bin/env node
import inquirer from 'inquirer';

let myBalance = 10000; //Dollar
let myPin = 7861;

let pinAnswer = await inquirer.prompt([{name: 'pin', message: "Enter Your Pin", type:"number"}]);

if(pinAnswer.pin === myPin){
    console.log('Welcome to MZ ATM');
    let option = await inquirer.prompt([{name: 'operation', message:'Please Select Option', type:'list', choices:['Withdraw', 'Check Balance']}]);
    if(option.operation === 'Withdraw'){
        let amount = await inquirer.prompt([{name:'amount', message:'Enter Amount', type:'number'}]);
        if(amount.amounr > myBalance){
            console.log('Insufficient Balance');
        } else {
            myBalance -= amount.amount;
            console.log(`Withdrawal Successful. Your New Balance is ${myBalance}`);
        }
    } else {
        console.log(`Your Balance is ${myBalance}`);
    }
} else {
    console.log('Invalid Pin');
}