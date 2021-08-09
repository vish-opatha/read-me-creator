// Packages/ modules needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markDown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = ["What is your Github username?", "What is your email address?", "What is your project name?",
                   "Please write a short description of your project?", "What kind of license should your project have?",
                   "What command should be run to install your dependencies?", "What command should be run to test?",
                   "What does the user need to know about using the repository?", "What does the user need to know about contributing the repo?"];

const[userName, userEmail, projectName, projectDescripton, licence, installDependencies, runTest, useRepo, contributeRepo ] = questions;

inquirer
  .prompt([
    { type: 'input', name: 'uName', message: userName,},
    { type: 'input', name: 'uEmail', message: userEmail,},
    { type: 'input', name: 'proName', message: projectName,},
    { type: 'input', name: 'proDecription', message: projectDescripton,},
    { type: 'list',  name: 'proLicence', message: licence, choices: ['MIT', 'Apache 2.0', 'GPL 3.0','BSD 3','None'],},
    { type: 'input', name: 'proDependencies', message: installDependencies,},
    { type: 'input', name: 'proTest', message: runTest},
    { type: 'input', name: 'proRepo', message: useRepo,},
    { type: 'input', name: 'proContribution', message: contributeRepo,}

])
.then((answers) => {
  // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const filename = "README.txt";
    var data = answers.uName;
    writeToFile(filename,data);
  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    // err ? console.log(err) : console.log(data);
    // console.log(data);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
  const markDownText = generateMarkdown(data);
  fs.writeFile(fileName,markDownText ,(err)=>
  err ? console.log(err) : console.log('Successfully created index.html!'))
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
