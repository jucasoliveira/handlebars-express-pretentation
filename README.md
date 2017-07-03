# Express-handlebars
This is a Express presentation. See at [GH pages](https://jucasoliveira.github.io/handlebars-express-pretentation/#/)

# Installation

```
npm install
```

# Before Start
You will need to set up your firebase database at `./backend/Firebase.js`

```javascript
var firebase = require('firebase');

var config = {
    apiKey: "YOURKEY",
    authDomain: "YOURDOMAIN",
    databaseURL: "YOURURL",
    projectId: "YOURID",
    storageBucket: "YOURATORAGEBUCKET",
    messagingSenderId: "YOURID"
};
firebase.initializeApp(config);


module.exports = firebase;
```

# Start the applicadion

```
npm start
```

# Presentation Slides

The presentation is on the following file

```
./index.html
```

# Sources of information

## [Generate Express with hbs engine](https://expressjs.com/en/starter/generator.html )

## [Best handlebars engine](https://github.com/ericf/express-handlebars)

## [Node.js + Express - Tutorial - Handlebars Templating Engine](https://github.com/mschwarzmueller/nodejs-basics-tutorial/tree/master/06-handlebars)

## [Dev Workshop - Simple Introduction to Handlebars js](https://github.com/dev-workshop/handleBars/)
