const prettyFormat = [
  "%h",
  "%H",
  "%s",
  "%f",
  "%b",
  "%ct",
  "%cr",
  "%cn",
  "%ce",
  "%at",
  "%ar",
  "%an",
  "%ae",
];
const log = {
  recentCommit: "",
  recentBranch: "",
  recentTime: "",
  recentVersion: "",
  recentBuild: "",
  lastCommitName: "",
  env: "",
};

async function gitCommitSync(branch = "origin/main") {
  const fs = await import("fs");
  if (!fs.existsSync("../../.git")) return log;
  const child = await import("child_process");

  const packageFile = JSON.parse(
    fs.readFileSync("../../package.json").toString()
  );
  let logData = null;

  const command =
    `git log -1 ${branch} --pretty=format:"` + prettyFormat.join("||") + '"';
  logData = child.execSync(command).toString().trim();
  const logDataArray = logData.split("||");

  log.recentBranch = branch.replace("origin/", "");
  log.lastCommitName = logDataArray[3];
  log.recentCommit = logDataArray[0];
  log.recentTime = new Date(+logDataArray[5] * 1000).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "full",
  });
  log.recentVersion = packageFile.version;
  log.recentBuild = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "full",
  });
  log.env = branch === "origin/main" ? "Live" : "Development";

  // Write to log file
  fs.writeFileSync("../../.astro/git.json", JSON.stringify(log));

  return log;
}
gitCommitSync("dev");
