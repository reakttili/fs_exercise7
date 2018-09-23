const puppeteer = require('puppeteer')
const baseUrl = 'http://localhost:3003/'
describe('e2e', () => {
  let page
  let browser
  beforeEach(async () => {
    browser = await puppeteer.launch( { headless: true } )
    page = await browser.newPage()
    await page.goto(baseUrl)
    try {
      await page.evaluate(() => { localStorage.setItem('loggeUser','{"username":"VB","name":"Ville","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZCIiwiaWQiOiI1YjcwNjA4ZTI4M2ExZTJiZmMwNzdlOGMiLCJpYXQiOjE1MzY1MTE5MjV9.hcbEiG9qxA_9JMdzHckWYoykqhJ1Rv8DoZWpI994GY4"}')})
    } catch (error) {
      console.log(error)
    }
  })
  afterEach(async () => {
    browser.close()
  })

  it('renders main page', async () => {
    //await page.type('input', 'Headless Chrome')
    await page.goto(baseUrl)
    await page.screenshot({ path: 'BlogsPage.png' })
    const textContent = await page.$eval('body', el => el.textContent)
    console.log(textContent)
    expect(textContent.includes('Blog App')).toBe(true)
    expect(textContent.includes('All Blogs')).toBe(true)
  })

  it('renders a blog', async () => {
    await page.goto(baseUrl)
    //console.log(await page.content())
    await page.waitFor(1000)
    const textContent = await page.$eval('body', el => el.textContent)
    await page.screenshot({ path: 'test2.png' })
    //console.log(await page.content())
    expect(textContent.includes('Camera Blog Cam')).toBe(true)
  })

  // Note: some example code for documentation
  // it('renders a note', async () => {
  //   await page.waitForSelector('.wrapper')
  //   const notes = await page.evaluate(() => {
  //     const elements = [...document.querySelectorAll('.wrapper')]
  //     return elements.map((e) => e.textContent)
  //   })
  //   expect(notes.length>0).toBe(true)
  //   expect(notes.join().includes('HTML on helppoa')).toBe(true)
  // })

  it('logout login test', async () => {
    await page.goto(baseUrl)
    await page.click('#logoutbtn')
    await page.click('button')
    await page.type('input[name=userName]', 'VB')
    await page.type('input[name=password]', 'salis')
    await page.click('button[type=submit]')
    await page.waitFor(2000)
    await page.screenshot({ path: 'test.png' })
    const textContent = await page.$eval('body', el => el.textContent)
    expect(textContent.includes('Camera Blog Cam')).toBe(true)

    // Note: some example code for documentation
    //let elements = page.getElementsByClassName('showGoals');
    // const id = Math.random()*10000
    // const note = `jestin lisays ${id}`
    // await page.type('input', note)
    //   await page.evaluate(() => {
    //     document.getElementById('username').value = 'user';
    //     document.getElementById('password').value = 'pass';
    //     document.getElementById('submit').click();
    // });
    //const form = await page.$('#outer-container > nav > span.right > span.search-notification-wrapper > span > form'); await form.evaluate(form => form.submit())
    //<button type="submit" class="ui button" role="button">login</button>
    // //await page.waitForSelector('.notification')  // ilman tätä testi ei mene läpi
    // await page.waitFor(1000)
    // // const notes = await page.evaluate(() => {
    // //   const elements = [...document.querySelectorAll('.wrapper')]
    // //   return elements.map((e) => e.textContent)
    // // })
    // const textContent = await page.$eval('body', el => el.textContent)
    // expect(textContent.includes('jestin lisays')).toBe(true)
    // const puppeteer = require('puppeteer');
    // (async() => {
    // const browser = await puppeteer.launch({
    //     headless: false
    // });
    // const page = await browser.newPage();
    // await page.setViewport({width: 1024, height: 768});
    // await page.goto(, {waitUntil: 'networkidle'});
    // await page.focus('#username');
    // await page.type('user', {delay: 100});
    // await page.focus('#password');
    // await page.type('pass', {delay: 100});
    // await page.click('#submit');
    // })();
  })
})