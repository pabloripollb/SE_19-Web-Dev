// 1. Import libraries
const express = require('express');
const path = require('path');

// 2. Create the app and define the port
const app = express();
const port = 19000;

// 3. Create your data source
const products = {
  '101': { title: 'How I did it', subtitulo: 'I asked AI to explain how to use js and part of server.js is a template provided by AI. Although I changed a few things like the requirements for the dinamic pages. before they were product and price and I also changed the variables by trial and error in order to understand how it works', text: "I'm writing something here because I just created a new requirement and I saw that it says undefined if it's empty and i prefer to have some text" },
  '102': { title: 'What I used AI for', subtitulo: 'I asked AI to explain me how the routes work when they go through server.js because what I was doing was not working because I used the href of about.html and I was getting constant errors until I understood that is not about files but URLs', text: "Same thing as 101 here" },
  '1030': { title: 'What I do not understand yet', subtitulo: 'package.json and package-lock.json', text: 'I asked the AI what are they for because it was his recommendation to use them and it says that they are essential for managing the project dependencies and that it can be shared with other. I tried to understand the code by looking at it and making some changes to see what happens and I got no conclusions from it because I saw no change, so I asked AI another time and it started giving me analogies with shopping lists saying package-lock was like the general shopping list and package-lock.json was the specific which made sense but I still do not get how to edit them so I make my own list' }
};

// --- DEFINE THE 3 ROUTES ---

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Route 3 (Dynamic): The product pages
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const productData = products[productId];

  if (productData) {
    res.send(`
        <h1> ${productData.title}</h1>
        <h2> ${productData.subtitulo}</h2>
        <p> ${productData.text} </p>
        <a href="/">Back to Home</a>
    `);
  } else {
    res.status(404).send('Sorry, product not found!');
  }
});

app.listen(port, () => {
  console.log(`Server is running! Open http://localhost:${port} in your browser.`);
});