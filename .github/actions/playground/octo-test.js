const { Octokit } = require('@octokit/rest');

(async () => {
  const octo = new Octokit({ auth: process.env.GITHUB_TOKEN });
  // const resp = await octo.checks.listForRef({ owner: 'koonpeng', repo: 'gh-playground', ref: '4ef7f01e33de6b8532603a3ffe1003fc0f2e1766' });
  await octo.checks.create({ owner: 'koonpeng', repo: 'gh-playground', name: 'test2', head_sha: '4ef7f01e33de6b8532603a3ffe1003fc0f2e1766' });
  console.log(resp.data);
})();
