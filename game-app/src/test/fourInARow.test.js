const puppeteer = require('puppeteer');
jest.setTimeout(30000);
describe('App Test', () => {
    test('correct sign after click', async () => {
        let browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('#collumn0', {visible: true});
        const collumn0 = await (await page.$('#square0')).click()
        const player = await page.waitForSelector('#collumn0 > #square0 > .player1', {visible: true});
        console.log('player',player);
        // const div0 = await (await page.$('#square0')).click()
        // const html0 = await page.$eval('#square0', e => e.innerText);
        // expect(html0).toBe('X');
        // const div1 = await (await page.$('#square1')).click()
        // const html1 = await page.$eval('#square1', e => e.innerText);
        // expect(html1).toBe('O');
        browser.close();
    })
});