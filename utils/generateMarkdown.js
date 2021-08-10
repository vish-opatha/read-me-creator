
var licenseBadge="";
var licenseSection="";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 'MIT', 'Apache 2.0', 'GPL 3.0','BSD 3','None'
function renderLicenseBadge(license) {
  let lib="";
  switch (license) {
    case 'MIT':
      lib = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'Apache 2.0':
      lib = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'GPL 3.0':
      lib = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'BSD 3':
      lib = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;

    case 'Apache 2.0':
      lib = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    default:
      lib="";
      break;
  }
  return lib;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Above function is has both functionalities included. Therefore there is no definition for this function.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let lc="";
  if((license ==='None') || (license ==="")){
    lc = `This project is not categorised under any license.`;
  }

  else {
    lc = `This project is licensed under the ${license} license.`;
  }

  return lc;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseBadge = renderLicenseBadge(data.proLicence);
  licenseSection = renderLicenseSection(data.proLicence);

  var markDown = 
  `# ${data.proName}

  ${licenseBadge}
     
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

  \`\`\`
  ${data.proDependencies} 
  \`\`\`
  
  ## <a name="usage"/>Usage
  ${data.proRepo}

  ## <a name="license"/>License
  ${licenseSection}

  ## Contributing
  ${data.proContribution}

  ## Tests
  To run the tests, run the following command;

  \`\`\`
  ${data.proTest}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or directly contact me at <${data.uEmail}> You can find my other work at [${data.uName}](https://github.com/${data.uName})`
;

  return markDown;
}

module.exports = generateMarkdown;
