const sonar = require('sonarqube-scanner');

const excludedFiles = getFilesToExclude();

const options = {
  // 'sonar.organization': 'SalonManager',
  'sonar.sources': '.',
  // 'sonar.scm.provider': 'git',
  // 'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  'sonar.projectKey': 'salon-manager-widgets-key',
  'sonar.exclusions': `${excludedFiles}`,
};

function getFilesToExclude() {
  return ['src/types.ts'];
}

sonar(
  {
    serverUrl: 'http://localhost:9000', // TODO provide the could url
    token: '8f8cce9693d215b0719f6ed086589ad3d2c1f44f',
    options,
  },
  () => {}
);
