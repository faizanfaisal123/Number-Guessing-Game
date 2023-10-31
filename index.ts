#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let num;
let attempts;
attempts = 0
let c_n = Math.floor(Math.random() * 100);
// console.log(c_n);

do {
  let G_n = await inquirer.prompt([
    {
      type: "number",
      name: "num",
      message: "Enter num",
    },
  ]);
  num = G_n.num;
  attempts++
  if(num<c_n){
          console.log(chalk.bgYellow("Guess Higher No."))
  }
  else if(num>c_n){
          console.log(chalk.bgYellow("Guess Lower No."))
  }
  else if(num==c_n){
          console.log(chalk.bgYellow(`Congratulations! You guessed the number in ${attempts} attempts`));
}
  else{
          console.log(chalk.bgYellow("Invalid entry"))
  }
} while (num !== c_n);