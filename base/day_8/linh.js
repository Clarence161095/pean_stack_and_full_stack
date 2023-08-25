const express = require('express');
const app = express();
const port = 3000;

// function express2(params) {
//   return {
//     listen: () => {},
//     get: (api, callBack) => {
//       if(currentAPI === api) {
//         callBack({}, {})
//       }
//     }
//   }
// }

// const app2 = express2();

// app2.get('tuan', (req, res) => {
//   res.send('Hello, this is the homepage!');
// })

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Route for another page
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
