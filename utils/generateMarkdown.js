let markDown="";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var markDown = 
  `# ${data.proName}
   
  ## Description
  ${data.proDecription}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [contribute](#contribute)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## <a name="installation"/>Installation
  To install the necessary dependencies, run the following command:
  ${data.proDependencies} 
  
  ## <a name="usage"/>Usage
  ${data.proRepo}

  ## <a name="license"/>License
  This project is licensed under the ${data.proLicence}license.

  ## <a name="contribute"/>Contributing
  ${data.proContribution}

  ## <a name="test"/>Tests
  To run the tests, run the following command;
  ${data.proTest}

  ## <a name="questions"/>Questions
  If you have any questions about the repo, open an issue or directly contact me at <${data.uEmail}> You can find my other work at [${data.uName}](https://github.com/${data.uName})`
;

  return markDown;
}

module.exports = generateMarkdown;
