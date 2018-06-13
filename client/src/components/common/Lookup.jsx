import lodash from 'lodash';

/*
  This is a simple Lookup module, to keep the UI names user friendly names, which have intuitive meaning
*/

let scoreNameLookup = {
  "install-packages": 'Install Packages',
  build: 'Project Build',
  UIAppbuild: 'UI App Build',
  tslint: 'TS Lint',
  eslint: 'ES Lint',
  htmlhint: 'HTMLHint',
  pmd: 'PMD',
  cadetTests: 'Participant Tests',
  commanderTests: 'Evaluation Tests',
  cadetUITests: 'Participant UI Tests', //Kept this due to existing Phantomjs, should be removed sometime
  commanderUITests: 'Evaluation UI Tests',
  cadetUIUnitTests: 'Participant UI Tests',
  commanderUIUnitTests: 'Evaluation UI Tests',
  cadete2etests: 'Participant e2e Tests',
  commandere2etests: 'Evaluation e2e Tests',
  dotnetBuild: 'Project Build',
  "assert-folder-structure": 'Project Structure Verification'
}

function toScoreSectionNames(nameToLookup) {
  return (scoreNameLookup[nameToLookup] || lodash.startCase(nameToLookup));
}

export default {
  toScoreSectionNames
}
