// Init project
const express = require('express');
const path = require('path');

// Init app
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// Homepage Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Timestamp API Routes
app.use('/api/whoami', require('./routes/api/whoami'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servicio iniciado en puerto ${PORT}`));
