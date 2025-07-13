import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(morgan('dev'));

app.use('/api/products', productRoutes);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
