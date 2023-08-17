# Bootcamp Challenge #19: Text Editor Progressive Web Application (PWA)

## Summary of the Challenge
In this challenge, we were tasked with building a text editor that runs in the browser. This application features data persistence techniques that also allows the application to function offline. The text editor uses IndexedDB API to store and retrieve data.

## Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation 
To run the application locally, ensure that you are in the root of the directory once cloned to your own system. Run ```npm install``` or ```npm i``` to install the required packages for running the application. 

## Usage 
The application can either be used at its [deployed Heroku link](https://jate-challenge-pwa-bd7f368bf575.herokuapp.com/) or accessed locally after following the above installation steps. If running locally, after installation enter ```npm run start:dev``` or ```npm run start``` to run the server. The application can be accessed at the default localhost of port 3005, with the port modifiable to the user's own needs.

Once on the application in the web browser, the user can either begin using the text editor right away within the browser or install it to their own system by pressing the Install button. If installed, the application can be accessed externally outside of the browser. The text editor can run offline and will save input whenever the browser if clicked out of or refreshed.

![](https://github.com/lpakingan/text-editor-pwa/blob/main/assets/text_editor_ss.jpg)

## Resources Used
- W3Schools
- MDN Web Docs
- Stack Overflow
- Github Issues
- [IndexedDB Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Deployed Link
The application can be accessed at this link: https://jate-challenge-pwa-bd7f368bf575.herokuapp.com/
