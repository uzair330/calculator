#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Calculator
let userInput = await inquirer.prompt({
    type: "list",
    name: "input",
    message: `Select from list`,
    choices: ["+", "x", "/", "-"]
});
if (userInput.input == "+") {
    let num = await inquirer.prompt([{
            type: "input",
            name: "number1",
            message: `Enter first Number: `
        },
        {
            type: "input",
            name: "number2",
            message: `Enter second Number`
        }
    ]);
    let add = Number(num.number1) + Number(num.number2);
    console.log(add);
}
//Multiplication
else if (userInput.input == "x") {
    let num = await inquirer.prompt([{
            type: "number",
            name: "number1",
            message: `Enter first Number: `
        },
        {
            type: "number",
            name: "number2",
            message: `Enter second Number`
        }
    ]);
    let multi = num.number1 * num.number2;
    console.log(multi);
}
else if (userInput.input == "-") {
    let num = await inquirer.prompt([{
            type: "number",
            name: "number1",
            message: `Enter first Number: `
        },
        {
            type: "number",
            name: "number2",
            message: `${chalk.bgBlue("Enter second Number")}`
        }
    ]);
    let sub = num.number1 - num.number2;
    console.log(sub);
}
