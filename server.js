// importing express package
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
// 
const PORT = process.env.PORT || 3002;

// Middleware for parsing JSON and urlencoded from data, and route. added static middleware for serving assets in public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});