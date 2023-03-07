const puppet = require('puppeteer'); 

//https://stackoverflow.com/questions/55388455/get-href-attribute-in-pupeteer-node-js

(async () => {

    // Artist such as Beyoncé have special characters in their name and will not work if not spelled exactly right.
    // If artist name is longer than one word, please enter hyphen between each word.

    let artist = "Kanye-West"
    let song = "Stronger"
    let sample = true

    const browser = await puppet.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(`https://www.whosampled.com/${artist}/${song}/`);

   let sampleName = "";
   let sampleArtist = "";

    try { 
    sampleName = await page.$eval( ".trackName", el => el.textContent.trim());
    sampleArtist = await page.$eval(".trackArtist", el => el.textContent.trim());
   
    } catch (error) {

        console.log("This song doesn't contain any samples :( or you entered the wrong artist or song name. Please try again.")
        sample = false
    }

   switch (sample) {
    case true:
       console.log("You entered: " + song + " "+ "by " + artist);  
       console.log("This song samples " + sampleName + " by " + sampleArtist);
         break;
   }
    await browser.close(); 
    

})();