const { execSync } = require('child_process');
try {
    console.log("Resetting...");
    execSync("git reset HEAD~1");
    console.log("Adding...");
    execSync("git add .");
    console.log("Committing...");
    execSync("git commit -m \"feat: update all workstation\"");
    console.log("Pushing...");
    execSync("git push origin main");
    console.log("Done.");
} catch (e) {
    console.error("Failed:", e.message);
    if (e.stdout) console.log(e.stdout.toString());
    if (e.stderr) console.log(e.stderr.toString());
}
