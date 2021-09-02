const core = require('@actions/core');
const github = require('@actions/github');

// core.error('an error message');
// core.warning('a warning message');
// core.info('an info message');
// core.notice('a notice message');

const ghToken = core.getInput('ghToken', { required: true });
console.log('token', ghToken);
const octo = github.getOctokit(ghToken);
octo.rest.checks.create({ name: 'test check', head_sha: github.context.sha });
