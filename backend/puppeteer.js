const puppeteer = require('puppeteer')

// const main = async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 250       // jokainen operaatio kestää nyt 0.25 sekuntia
//   })
//   // ...
// }

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3004/users')
  try {
    await page.evaluate(() => { localStorage.setItem('loggeUser','{"username":"VB","name":"Ville","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZCIiwiaWQiOiI1YjcwNjA4ZTI4M2ExZTJiZmMwNzdlOGMiLCJpYXQiOjE1MzY1MTE5MjV9.hcbEiG9qxA_9JMdzHckWYoykqhJ1Rv8DoZWpI994GY4"}')})
  } catch (error) {
    console.log(error)
  }
  //await page.type('input', 'Headless Chrome')
  await page.goto('http://localhost:3004/')
  await page.screenshot({ path: 'kuva.png' })
  await browser.close()
}

main()