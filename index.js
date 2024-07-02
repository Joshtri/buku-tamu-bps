/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import { config } from 'dotenv';
import flash from 'connect-flash';
import hbs from 'hbs';
import handlebarsLayouts from 'handlebars-layouts';
import homeRouter from './routes/index.route.js';
import connectDB from './config/dbConfig.js';
import envFile from './config/envConfig.js';

// Load environment variables from the appropriate .env file
config({ path: path.resolve(process.cwd(), envFile) });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// Setup view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'layouts'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// Serve Font Awesome from node_modules
app.use('/fa', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));

// Gunakan middleware untuk membaca JSON dan URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Flash middleware
app.use(flash({ sessionKeyName: 'flashMessage' }));

// Routes
app.use('/', homeRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
