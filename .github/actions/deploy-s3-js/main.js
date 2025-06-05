const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

(function run() {
    // get inputs
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: false });
    const distFolder = core.getInput('dist-folder', { required: true });

    // github.context.

    // upload files
    const s3Uri = `s3://${bucket}`;
    // exec.exec(`aws s3 sync <local-folder> <s3-bucket>`); // command in the regular shell (runner)
    // use AWS access keys(shown only once) to restrict access to CLI AWS_ACCESS_KEY_ID
    // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --${bucketRegion}`); // command in the regular shell (runner)
    console.log(`aws s3 sync ${distFolder} ${s3Uri} --${bucketRegion}`);


    core.notice('Hello from custom JS action');
})();