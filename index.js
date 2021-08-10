// Packages/ modules needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for user input
const questionPrompts= ["What is your Github username?", "What is your email address?", "What is your project name?",
                        "Please write a short description of your project?", "What kind of license should your project have?",
                        "What command should be run to install your dependencies?", "What command should be run to test?",
                        "What does the user need to know about using the repository?", "What does the user need to know about contributing the repo?"];

const[userName, userEmail, projectName, projectDescripton, licence, installDependencies, runTest, useRepo, contributeRepo ] = questionPrompts;

const questionPool  = [ { type: 'input', name: 'uName', message: userName,},
                        { type: 'input', name: 'uEmail', message: userEmail,},
                        { type: 'input', name: 'proName', message: projectName,},
                        { type: 'input', name: 'proDecription', message: projectDescripton,},
                        { type: 'list',  name: 'proLicence', message: licence, choices: ['MIT', 'Apache 2.0', 'GPL 3.0','BSD 3','None'],},
                        { type: 'input', name: 'proDependencies', message: installDependencies,},
                        { type: 'input', name: 'proTest', message: runTest},
                        { type: 'input', name: 'proRepo', message: useRepo,},
                        { type: 'input', name: 'proContribution', message: contributeRepo,}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      // let markDownText = "#Topic";
      const markDownText = generateMarkdown(data);
      fs.writeFile(fileName,markDownText,(err)=>
      err ? console.log(err) : console.log('You have successfully created your README file!'));
};

// TODO: Create a function to initialize app
function init() {
      var filename = "README.md";
      inquirer.prompt(questionPool)
      .then((data) => writeToFile(filename,data));     
};



// Function call to initialize app
init();
