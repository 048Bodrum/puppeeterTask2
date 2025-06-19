const { clickElement, putText, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Movie tests", () => {
  beforeEach(async () => {
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first happy path'", async () => {
     await clickElement(page, "[data-time-stamp='1750366800']");
     await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
     await clickElement(page, ".buying-scheme__chair.buying-scheme__chair_standart");
     await clickElement(page, ".acceptin-button");
     const actual = await getText(page, ".ticket__hint");
     const expected = "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.";
    await expect(actual).toContain(expected);
  });

  test("The second happy path", async () => {
     await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='228']");
     await clickElement(page, ".buying-scheme__chair.buying-scheme__chair_standart");
     await clickElement(page, ".acceptin-button");
     await clickElement(page, ".acceptin-button", onclick="[location.href='scripts/sale_save.php']");
     const actual = await getText(page, ".ticket__info");
     const expected = "На фильм: Мир Юрского периода";
     await expect(actual).toContain(expected);
  });

  test("The sad path", async () => {
    await clickElement(page, ".movie-seances__time-block");
    const button = await page.$('button.acceptin-button');
    const isDisabled = await page.evaluate((button) => "button.disabled", button);
    expect(isDisabled).toEqual("button.disabled");
  });
});





