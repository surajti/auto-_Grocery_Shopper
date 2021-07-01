
const { constants } = require('buffer');
const { prependListener } = require('process');
const puppeteer = require('puppeteer');

(async () => {
  try{
  const browser = await puppeteer.launch(
     {   
    //headless makes the chromium browser visible
     headless: false,
     slowMo: 60,
     //These 2 help to open the browser in full screen
     defaultViewport: null,
    args: ["--start-maximized"],
    }
  );
  let page = await browser.newPage();

  // Goes to amazon site
  await page.goto("https://www.amazon.in/gp/css/homepage.html?from=hz");
  //sign in 
  await Promise.all([page.click("#nav-link-accountList-nav-line-1"), page.waitForNavigation()]);
  await page.type(".a-input-text.a-span12.auth-autofocus.auth-required-field" , "mahici8394@w3boats.com");
  
  // search click and type password
  await Promise.all([page.click(".a-button-input"), page.waitForNavigation()]);
  await page.waitForSelector(".a-input-text.a-span12.auth-autofocus.auth-required-field");
  await page.type(".a-input-text.a-span12.auth-autofocus.auth-required-field", "mahici8394@w3boats.com");
  await Promise.all([page.click("#signInSubmit"), page.waitForNavigation()]);
  
  //search in search bar  
  await page.type("#twotabsearchtextbox","Tata Salt Lite, Low Sodium, 1kg");
  await Promise.all([page.click("#nav-search-submit-button"), page.waitForNavigation()]);
  // unique selector nhi hai 
  await Promise.all([page.click(".a-size-base-plus.a-color-base.a-text-normal")]);
  // to run in  different tab
  let pages = await browser.pages();
  page = await pages[pages.length-1];
  await page.waitForSelector("#freshAddToCartButton .a-button-input",{visible :true});
   await page.evaluate(function(){
     let x = document.querySelector("#freshAddToCartButton .a-button-input");
     x.click();
   })

   
   
   // now clicked on buy again 
    await page.evaluate(function(){
     let a = document.querySelectorAll(".nav-a");
             a[6].click();
      
      })
  /
      await page.waitForNavigation();
  //     //type and clicked on Aashirvaad Shudh Atta
  //     await  page.type("#twotabsearchtextbox","Aashirvaad Shudh Chakki Atta");
  //     await Promise.all([page.click("#nav-search-submit-button"), page.waitForNavigation()]);
  //     await page.evaluate(function(){
  //         let a = document.querySelectorAll(".a-size-base-plus.a-color-base.a-text-normal");
  //         a[0].click();
  //      })
  //      pages = await browser.pages();
  //      page = await pages[pages.length-1];
  //      await page.waitForSelector("#freshAddToCartButton-announce");
  //     await  Promise.all([page.click("#freshAddToCartButton-announce"), page.waitForNavigation()]);

      
      
      
      // Type Surf Excel on search bar
      await  page.type("#twotabsearchtextbox","Surf Excel");
      await Promise.all([page.click("#nav-search-submit-button"), page.waitForNavigation()]);
 
      await page.waitForSelector(".a-size-base-plus.a-color-base.a-text-normal");
      await page.click(".a-size-base-plus.a-color-base.a-text-normal");

       pages = await browser.pages();
       page = await pages[pages.length-1];

       await page.waitForSelector("#freshAddToCartButton-announce", {visible:true});
        await page.click("#freshAddToCartButton-announce");
       

       
        await page.evaluate(function(){
        let buyagain = document.querySelectorAll(".nav-a");
        buyagain[6].click();
        })
        await page.waitForNavigation();

        await page.type("#twotabsearchtextbox", "Colgate Max Fresh");
        await Promise.all([page.click("#nav-search-submit-button"), page.waitForNavigation()]);
        await page.waitForSelector(".a-size-base-plus.a-color-base.a-text-normal");
        await page.click(".a-size-base-plus.a-color-base.a-text-normal");
        pages = await browser.pages();
        page = await pages[pages.length-1];

      await page.waitForSelector("#a-autoid-0-announce");   
    
      await page.click("#a-autoid-0-announce"); 
      await page.click("#nav-cart-count");
     
    

    }
   

  catch(err)
  {
    console.log(err);
  }   
  })();
