import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import ConnectDB from './Database/Database.js';
ConnectDB();
import AuthRoutes from './Routes/authRoutes.js';



const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});


// All Routes
app.use('/api/auth', AuthRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});