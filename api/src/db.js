const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGODB_URI= 'mongodb+srv://mongo:mongoose@cluster0.58swq.mongodb.net/ecommercedb?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false,
   useCreateIndex: true
  })
.then(() => console.log('MongoDB Connected to')) //, db.connection.host
.catch((err) => console.log(err))


const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(mongoose));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(mongoose.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
mongoose.models = Object.fromEntries(capsEntries);








