const { Builder, By } = require('selenium-webdriver');

const script_fun = async () => {
driver = new Builder().forBrowser('chrome').build();
await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
// const title = driver.findElement(By.css('h1.title'))
let title = await driver.getTitle();
// const page = driver.findElements(By.css("div.container"));
// const title = page.findElement(By.css("h1.display"))

  console.log('page is : ', title);
//   await driver.quit();
};

script_fun();
