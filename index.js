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
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
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
