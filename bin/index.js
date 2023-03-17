#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
async function myBanner() {
    await showBanner("\t\nObject Oriented Programming", chalk.blue("Welcome!"), "green");
}
await myBanner();
class Person {
    _personality;
    constructor() {
        this._personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this._personality = "Introvert";
        }
        else if (answer === 2) {
            this._personality = "Extrovert";
        }
        else {
            this._personality = "Mystery";
        }
    }
    getPersonality() {
        return this._personality;
    }
}
class Employee extends Person {
    _name;
    _emplID;
    _department;
    constructor() {
        super();
        this._name = "";
        this._emplID = 0;
        this._department = "";
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
    get EmpID() {
        return this._emplID;
    }
    set EmpID(employID) {
        this._emplID = employID;
    }
    get Department() {
        return this._department;
    }
    set Department(department) {
        this._department = department;
    }
}
const { num } = await inquirer.prompt([
    {
        name: "num",
        type: "list",
        message: "Choose any number: ",
        choices: [1, 2],
    },
]);
const myEmployee = new Employee();
myEmployee.askQuestion(num);
const { name } = await inquirer.prompt([
    {
        name: "name",
        message: "Enter your name: ",
    },
]);
myEmployee.Name = name;
const { employID } = await inquirer.prompt([
    {
        name: "employID",
        message: "Enter your employ ID: ",
    },
]);
myEmployee.EmpID = employID;
const { department } = await inquirer.prompt([
    {
        name: "department",
        message: "Enter your department name: ",
    },
]);
myEmployee.Department = department;
console.log(`\t> Your Department is ${myEmployee.Department}\n`);
console.log(`\t> Your employee ID is ${myEmployee.EmpID}\n`);
console.log(`\t> Your Name is ${myEmployee.Name}\n`);
console.log(`\t> Your personality is ${myEmployee.getPersonality()}\n`);
