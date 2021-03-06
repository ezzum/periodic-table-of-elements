var NodeEnvironment = require("jest-environment-node");
var puppeteer = require("puppeteer");

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    this.global.browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: [`--window-size=${1400},${1100}`],
    });
    this.global.page = await this.global.browser.newPage();
    await this.global.page.goto("http://localhost:3000/", {
      waitUntil: "load",
    });
    await this.global.page.setViewport({ width: 1400, height: 1100 });
  }

  async teardown() {
    await this.global.browser.close();
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
