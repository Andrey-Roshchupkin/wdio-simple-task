const testData_1 = {
  code: "Hello from WebDriver",
  syntax: "None",
  expiration: "10 Minutes",
  pasteName: "helloweb",
};

const testData_2 = {
  code: `git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    
git push origin master --force`,
  syntax: "Bash",
  expiration: "10 Minutes",
  pasteName: "how to gain dominance among developers",
};

module.exports = { testData_1, testData_2 };
