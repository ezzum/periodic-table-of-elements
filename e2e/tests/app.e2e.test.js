describe("e2e App tests", () => {
  let page = global.page;
  let elementName;
  it("Title Periodic Table of Elements", async () => {
    await expect(page.title()).resolves.toMatch("Periodic Table of Elements");
  });
  it("Element mouse enter", async () => {
    const top = await page.evaluate(
      () => document.querySelector("a").offsetTop
    );
    const left = await page.evaluate(
      () => document.querySelector("a").offsetLeft
    );
    await page.mouse.move(left, top);
  });
  it("Element click / description title", async () => {
    const elementClassName = await page.evaluate(
      () => document.querySelector("a").classList[1]
    );
    elementName = await page.evaluate(
      () => document.querySelector("a > div:nth-child(3)").innerText
    );

    await page.click(`.${elementClassName}`);
    const expectedTitle = "Описание";
    const descriptionTitle = await page.evaluate(
      () => document.querySelector(".description > h1").innerText
    );
    expect(descriptionTitle).toEqual(expectedTitle);
  });
  it("Element click / name element", async () => {
    const descriptionElementName = await page.evaluate(
      () => document.querySelector(".description__text").innerText
    );
    expect(descriptionElementName).toEqual(elementName);
  });
  it("Exit description", async () => {
    await page.click(".exit-button");
    const expectedTitle = "Периодическая таблица элементов";
    const appTitle = await page.evaluate(
      () => document.querySelector(".app__title").innerText
    );
    expect(appTitle).toEqual(expectedTitle);
  });
  it("Button click", async () => {
    const elementColor = await page.evaluate(
      () => document.querySelector("a").style.backgroundColor
    );
    await page.click(".jiDLLm");
    const newElementColor = await page.evaluate(
      () => document.querySelector("a").style.backgroundColor
    );
    expect(elementColor).not.toBe(newElementColor);
  });
});
