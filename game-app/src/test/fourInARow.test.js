const puppeteer = require('puppeteer');
jest.setTimeout(30000);
describe('App Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
          headless: false,
          slowMo:150
        });
        page = await browser.newPage();
        await page.goto("http://localhost:3000/");
    });

    test("Checks if the board is empty", async () => {
        const player1 = await page.$('.player1');
        const player2 = await page.$('.player2');
        expect(player1).toBeNull();
        expect(player2).toBeNull();
    });

    test('correct sign after click', async () => {
        await page.waitForSelector('#column0', {visible: true});
        const collumn0 = await (await page.$('#square0')).click()
        const player = await page.waitForSelector('#column0 > #square0 .player1', {visible: true});
        expect(player).not.toBeNull();
        // const div0 = await (await page.$('#square0')).click()
        // const html0 = await page.$eval('#square0', e => e.innerText);
        // expect(html0).toBe('X');
        // const div1 = await (await page.$('#square1')).click()
        // const html1 = await page.$eval('#square1', e => e.innerText);
        // expect(html1).toBe('O');
    })

    afterAll(() => {
        browser.close();
    });
});