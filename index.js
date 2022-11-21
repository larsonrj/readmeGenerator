// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title for your project?",
    name: "title",
  },
  {
    type: "list",
    message: "Which license is used for this project?",
    name: "license",
    choices: [
      "None",
      "GNU Affero General Public License v3.0",
      "Apache License 2.0",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License v2.1",
      "MIT License",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      return generateMarkdown(answers);
    })
    .then(function (readmeText) {
      fs.writeFile("readme.md", readmeText, (err) =>
        err ? console.error(err) : console.log("Success!")
      );
    });
}

// Function call to initialize app
init();
