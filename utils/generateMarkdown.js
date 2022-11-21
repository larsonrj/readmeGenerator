// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license === "None") {
    return "";
  } else {
    const badgeStr = license.license.replaceAll(" ", "%20");
    const badge = "https://img.shields.io/badge/License-" + badgeStr + "-green";
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data);
  console.log(badge);
  const readmeText = `# ${data.title}\n![License Badge](${badge})`;
  return readmeText;
}

module.exports = generateMarkdown;
