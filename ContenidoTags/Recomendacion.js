const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/gamedb', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  userId: String,
  interactions: [
    {
      category: String,
      tag: String,
      type: String,
      timestamp: Date
    }
  ]
});

const User = mongoose.model('User', userSchema);

app.get('/recommendations/:userId', async (req, res) => {
  const userId = req.params.userId;
  
  // Fetch user interactions
  const user = await User.findOne({ userId });
  
  if (!user) {
    return res.status(404).send('User not found');
  }

  // Analyze user interactions to create recommendations
  const recommendations = {}; // Your recommendation logic here

  res.json(recommendations);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
