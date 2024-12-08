import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cricketerRoutes from './routes/cricketerRoutes.js';



dotenv.config(); // Load environment variables

const app = express();
connectDB(); // Connect to MongoDB Atlas

app.use(express.json()); // Middleware to parse JSON
app.use('/api/cricketers', cricketerRoutes);


// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
