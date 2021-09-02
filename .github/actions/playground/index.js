const core = require('@actions/core');
const github = require('@actions/github');

// core.error('an error message');
// core.warning('a warning message');
// core.info('an info message');
// core.notice('a notice message');

async function main() {
  try {
    const ghToken = process.env.GITHUB_TOKEN;
    const octo = github.getOctokit(ghToken);
    // console.log(github.context.payload.pull_request.head);
    // const baseParams = { owner: github.context.repo.owner, repo: github.context.repo.repo };
    // let resp = await octo.rest.checks.listForRef({ ...baseParams, ref: github.context.payload.pull_request.head.ref });
    // const checkRunId = resp.data.check_runs[0].id;
    // resp = await octo.rest.checks.update({
    //   ...baseParams,
    //   check_run_id: checkRunId,
    //   output: {
    //     title: 'my title',
    //     summary: 'my summary',
    //     text: 'my text',
    //   }
    // });
    const resp = await octo.rest.checks.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      name: 'test',
      head_sha: github.context.payload.pull_request.head.sha,
      conclusion: 'success',
      output: {
        title: 'test title',
        summary: `# test 1
## test 2`,
        // text: 'https://microsoft.com',
      }
    });
    console.log(resp.data);
  } catch (e) {
    core.setFailed(e.message);
  }
}

main();
