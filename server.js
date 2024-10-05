require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');  
const app = express();


app.use(express.json());


mongoose.connect("mongodb+srv://man:rL6LlQQ9QYjhQppV@cluster0.yxujymc.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch((err) => console.log('MongoDB connection failed:', err));


app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);  
 
app.get('/', (req, res) => {
    res.send('Recipe Management API is running...');
});


app.listen(5000, () => {
    console.log("server started");
});
