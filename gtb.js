const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runner() {
    let command = `git add --all`;
    command += ` && git commit -m "Create ${process.argv[2]} branch"`;
    command += ` && git push`;
    command += ` && git checkout -b ${process.argv[2]}`;
    command += ` && git push -u origin ${process.argv[2]}`;
    command += ` && git checkout master`;
    const { stdout, stderr } = await exec(command);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}
runner();