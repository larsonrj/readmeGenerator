// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license === "None") {
    badge = "";
    return badge;
  } else {
    const badgeStr = license.license.replaceAll(" ", "%20");
    const badgeUrl =
      "https://img.shields.io/badge/License-" + badgeStr + "-green";
    const badge = `![License Badge](${badgeUrl})`;
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license === "None") {
    link = "";
    return link;
  } else {
    link = "  \n[License](#License)";
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license === "None") {
    section = "";
    return section;
  } else {
    section =
      "## License <a name='License'></a>  \nThis project uses the following license: " +
      license.license;
    return section;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // The render license functions use the output from the prompted questions and return the necessary sections for the readme
  const badge = renderLicenseBadge(data);
  const link = renderLicenseLink(data);
  const section = renderLicenseSection(data);
  const readmeText = `# ${data.title}  
  ${badge}   
  ## Description  
  ${data.description}
  ## Table of Contents:  
  [Installation](#Installation)  
  [Usage](#Usage)${link}  
  [Contributing](#Contributing)  
  [Tests](#Tests)  
  [Questions](#Questions)  
  ## Installation <a name="Installation"></a>  
  ${data.install}  
  ## Usage <a name="Usage"></a>  
  ${data.usage}  
  ${section}  
  ## Contributing <a name="Contributing"></a>  
  ${data.contributing}  
  ## Tests <a name="Tests"></a>  
  ${data.tests}  
  ## Questions <a name="Questions"></a>  
  If you have any further questions you can visit the repo owner's Github profile here: [${data.username}](https://github.com/${data.username}) or email: ${data.email}`;
  return readmeText;
  // Using a template literal, the readmeText outputs the necessary info from the question prompts and formats it into markdown syntax which is then output in the init function on index.js
}

// generateMarkdown is exported to be used in index.js
module.exports = generateMarkdown;
