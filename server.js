const express = require("express");
const app = express();
const cors = require('cors');

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const routes = require('./server/routes/pets.routes');
routes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));







