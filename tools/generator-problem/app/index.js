var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your problem name",
        default: "propblem",
      },
      {
        type: "input",
        name: "description",
        message: "Your problem description",
        default: "description",
      },
    ]);
    this.log(this.answers.name);
    this.log(this.answers.description);
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath(`${this.answers.name}/README.md`),
      {
        name: this.answers.name,
        description: this.answers.description,
      }
    );

    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath(`${this.answers.name}/index.js`),
      {
        name: this.answers.name,
      }
    );

    this.fs.copyTpl(
      this.templatePath("index.spec.js"),
      this.destinationPath(`${this.answers.name}/index.spec.js`),
      {
        name: this.answers.name,
      }
    );
  }
};
