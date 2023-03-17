#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

async function myBanner() {
  await showBanner(
    "\t\nObject Oriented Programming",
    chalk.blue("Welcome!"),
    "green"
  );
}
await myBanner();

class Person {
  private _personality: string;

  constructor() {
    this._personality = "Mystery";
  }
  askQuestion(answer: number) {
    if (answer === 1) {
      this._personality = "Introvert";
    } else if (answer === 2) {
      this._personality = "Extrovert";
    } else {
      this._personality = "Mystery";
    }
  }
  getPersonality() {
    return this._personality;
  }
}

class Employee extends Person {
  private _name: string;
  private _emplID: number;
  private _department: string;

  constructor() {
    super();
    this._name = "";
    this._emplID = 0;
    this._department = "";
  }
  get Name() {
    return this._name;
  }
  set Name(name: string) {
    this._name = name;
  }
  get EmpID() {
    return this._emplID;
  }
  set EmpID(employID: number) {
    this._emplID = employID;
  }
  get Department() {
    return this._department;
  }
  set Department(department: string) {
    this._department = department;
  }
}

const { num }: { num: number } = await inquirer.prompt([
  {
    name: "num",
    type: "list",
    message: "Choose any number: ",
    choices: [1, 2],
  },
]);

const myEmployee = new Employee();
myEmployee.askQuestion(num);

const { name }: { name: string } = await inquirer.prompt([
  {
    name: "name",
    message: "Enter your name: ",
  },
]);
myEmployee.Name = name;

const { employID }: { employID: number } = await inquirer.prompt([
  {
    name: "employID",
    message: "Enter your employ ID: ",
  },
]);
myEmployee.EmpID = employID;

const { department }: { department: string } = await inquirer.prompt([
  {
    name: "department",
    message: "Enter your department name: ",
  },
]);
myEmployee.Department=department;
console.log(`\t> Your Department is ${myEmployee.Department}\n`);
console.log(`\t> Your employee ID is ${myEmployee.EmpID}\n`);
console.log(`\t> Your Name is ${myEmployee.Name}\n`);
console.log(`\t> Your personality is ${myEmployee.getPersonality()}\n`);


