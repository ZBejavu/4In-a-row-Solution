const puppeteer = require('puppeteer');
jest.setTimeout(6000);
describe('App Test', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
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

    test('Correct sign after click', async () => {
        await page.waitForSelector('#column0', {visible: true});
        await (await page.$('#column0')).click()
        await page.waitForSelector('#column0 #square0 .player1', {visible: true});
        await (await page.$('#column0')).click()
        await page.waitForSelector('#column0 #square1 .player2', {visible: true});
    })

    test('Can have a tie', async () => {
        await page.waitForSelector('#column0', {visible: true});
        for(let i = 0 ; i < 3; i++) {
            for(let j = 0; j < 6; j++) {
                await (await page.$(`#column${i}`)).click()
            }
        }
        await (await page.$('#column5')).click()
        let modal = await page.$('.winModal');
        expect(modal).toBeNull();
        for(let i = 3 ; i < 7; i++){
            for(let j = 0; j < 6; j++){
                await (await page.$(`#column${i}`)).click()
            }
        }
        modal = await page.waitForSelector('.winModal', {visible: true});
        expect(modal).not.toBeNull();
    })

    test('Can win horizontal', async () => {
        await page.waitForSelector('#column0', {visible: true});
        for(let i = 2 ; i < 5; i++) {
            for(let j = 0; j < 4; j++) {
                    await (await page.$(`#column${i}`)).click()
            }
        }
        await (await page.$('#column4')).click()
        for(let i = 0; i< 3; i++) {
            await (await page.$('#column5')).click()
        }
        await (await page.$('#column4')).click()
        let modal = await page.$('.winModal');
        expect(modal).toBeNull();
        await (await page.$('#column5')).click()
        modal = await page.waitForSelector('.winModal', {visible: true});
        expect(modal).not.toBeNull();
    })

    test('Can win vertical', async () => {
        await page.waitForSelector('#column1', {visible: true});
        for(let i = 0 ; i < 3; i++) {
                await (await page.$('#column1')).click()
        }
        for(let i = 1; i < 6; i++) {
            if(i % 2 === 0) {
                await (await page.$('#column1')).click()
            } else {
                await (await page.$('#column2')).click()
            }
        }
        let modal = await page.$('.winModal');
        expect(modal).toBeNull();
        await (await page.$('#column1')).click()
        modal = await page.waitForSelector('.winModal', {visible: true});
        expect(modal).not.toBeNull();
    })

    test('Can win diagonal up', async () => {
        await page.waitForSelector('#column1', {visible: true});
        await (await page.$('#column1')).click()
        await (await page.$('#column2')).click()
        await (await page.$('#column2')).click()

        for(let i = 0; i < 5; i++) {
            await (await page.$('#column4')).click()
        }
        await (await page.$('#column3')).click()
        await (await page.$('#column3')).click()
        let modal = await page.$('.winModal');
        expect(modal).toBeNull();
        await (await page.$('#column3')).click()
        modal = await page.waitForSelector('.winModal', {visible: true});
        expect(modal).not.toBeNull();
    })

    test('Can win diagonal down', async () => {
        await page.waitForSelector('#column1', {visible: true});
        await (await page.$('#column4')).click()
        await (await page.$('#column3')).click()
        await (await page.$('#column3')).click()

        for(let i = 0; i < 5; i++){
            await (await page.$('#column1')).click()
        }
        await (await page.$('#column2')).click()
        await (await page.$('#column2')).click()
        let modal = await page.$('.winModal');
        expect(modal).toBeNull();
        await (await page.$('#column2')).click()
        modal = await page.waitForSelector('.winModal', {visible: true});
        expect(modal).not.toBeNull();
    })

    afterEach(() => {
        browser.close();
    });
});