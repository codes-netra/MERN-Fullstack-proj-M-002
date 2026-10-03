/*
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Item = require('./Item.js'); // Ensure the path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Function to connect to MongoDB and seed data
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    const count = await Item.countDocuments();
    if (count === 0) {
      await seedDummyData();
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

// API Endpoint to get items array
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

// API Endpoint to get items array
app.get('/api/items/:id', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching items' });
  }
});






// API Endpoint to create a new item
app.post('/api/items', async (req, res) => {
  const { name, value, category } = req.body;
  try {
    const newItem = new Item({ name, value, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating item' });
  }
});

// API Endpoint to update an item
app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, value, category } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { name, value, category }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Error updating item' });
  }
});





// API Endpoint to delete an item
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

// Start the server and connect to the database
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase();
});


*/


/*
//For added fields from 3 to 8.

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Item = require('./Item.js'); // Ensure the path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Function to connect to MongoDB and seed data
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    const count = await Item.countDocuments();
    if (count === 0) {
      await seedDummyData();
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};




// API Endpoint to get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

// API Endpoint to get a specific item by ID
app.get('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching item' });
  }
});

// API Endpoint to create a new item
app.post('/api/items', async (req, res) => {
  const { name, value, category } = req.body;
  try {
    const newItem = new Item({ name, value, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating item' });
  }
});

// API Endpoint to update an item
app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, value, category } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { name, value, category }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Error updating item' });
  }
});

// API Endpoint to partially update an item
app.patch('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const updates = {};
  const { name, value, category } = req.body;

  if (name !== undefined) updates.name = name;
  if (category !== undefined) updates.category = category;

  if (value !== undefined) {
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
      return res.status(400).json({ error: 'Value must be a valid number.' });
    }
    updates.value = numericValue;
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'No update fields were provided.' });
  }

  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found.' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error('Update Error:', error.message);
    res.status(500).json({ error: 'Failed to update item.' });
  }
});

// API Endpoint to delete an item
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

// Start the server and connect to the database
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase();
});

*/



// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Item = require('./Item.js'); // Ensure the path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Function to connect to MongoDB and seed data
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    const count = await Item.countDocuments();
    if (count === 0) {
      await seedDummyData();
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

// Function to seed dummy data
const seedDummyData = async () => {
  try {
    await Item.insertMany([
       { name: "Apple", value: 1.2, details: "Fresh red apples", category: "Fruit", quantity: 100, supplier: "Farm A", rating: 4.5, inStock: true },
    { name: "Banana", value: 0.5, details: "Ripe yellow bananas", category: "Fruit", quantity: 150, supplier: "Farm B", rating: 4.7, inStock: true },
    { name: "Carrot", value: 0.8, details: "Crunchy orange carrots", category: "Vegetable", quantity: 200, supplier: "Farm C", rating: 4.3, inStock: true },
    { name: "Tomato", value: 1.0, details: "Juicy red tomatoes", category: "Vegetable", quantity: 120, supplier: "Farm D", rating: 4.6, inStock: true },
    { name: "Grapes", value: 2.5, details: "Sweet green grapes", category: "Fruit", quantity: 80, supplier: "Farm E", rating: 4.8, inStock: true },
    { name: "Lettuce", value: 1.5, details: "Crisp green lettuce", category: "Vegetable", quantity: 90, supplier: "Farm F", rating: 4.2, inStock: true },
    { name: "Orange", value: 1.3, details: "Fresh juicy oranges", category: "Fruit", quantity: 110, supplier: "Farm G", rating: 4.4, inStock: true },
    { name: "Potato", value: 0.6, details: "Starchy brown potatoes", category: "Vegetable", quantity: 250, supplier: "Farm H", rating: 4.1, inStock: true },
    { name: "Strawberry", value: 3.0, details: "Sweet red strawberries", category: "Fruit", quantity: 60, supplier: "Farm I", rating: 4.9, inStock: true },
    { name: "Cucumber", value: 0.7, details: "Fresh green cucumbers", category: "Vegetable", quantity: 140, supplier: "Farm J", rating: 4.3, inStock: true },
    { name: "Pineapple", value: 3.5, details: "Tropical sweet pineapple", category: "Fruit", quantity: 50, supplier: "Farm K", rating: 4.6, inStock: true },
    { name: "Onion", value: 0.9, details: "Strong flavored onions", category: "Vegetable", quantity: 180, supplier: "Farm L", rating: 4.0, inStock: true },
    { name: "Peach", value: 2.0, details: "Juicy ripe peaches", category: "Fruit", quantity: 70, supplier: "Farm M", rating: 4.7, inStock: true },
    { name: "Bell Pepper", value: 1.4, details: "Colorful bell peppers", category: "Vegetable", quantity: 130, supplier: "Farm N", rating: 4.5, inStock: true },
    { name: "Watermelon", value: 4.0, details: "Refreshing watermelon", category: "Fruit", quantity: 30, supplier: "Farm O", rating: 4.8, inStock: true },
    { name: "Spinach", value: 1.1, details: "Nutritious spinach", category: "Vegetable", quantity: 160, supplier: "Farm P", rating: 4.2, inStock: true },
    { name: "Blueberry", value: 3.2, details: "Delicious blueberries", category: "Fruit", quantity: 40, supplier: "Farm Q", rating: 4.9, inStock: true },
    { name: "Zucchini", value: 1.0, details: "Fresh green zucchini", category: "Vegetable", quantity: 110, supplier: "Farm R", rating: 4.3, inStock: true },
    { name: "Kiwi", value: 2.5, details: "Tropical kiwi fruit", category: "Fruit", quantity: 50, supplier: "Farm S", rating: 4.6, inStock: true },
    { name: "Cauliflower", value: 1.8, details: "White cauliflower", category: "Vegetable", quantity: 90, supplier: "Farm T", rating: 4.4, inStock: true },
    { name: "Mango", value: 2.8, details: "Sweet ripe mangoes", category: "Fruit", quantity: 60, supplier: "Farm U", rating: 4.7, inStock: true },
    { name: "Broccoli", value: 1.6, details: "Healthy broccoli", category: "Vegetable", quantity: 100, supplier: "Farm V", rating: 4.5, inStock: true },
    { name: "Raspberry", value: 3.0, details: "Tart raspberries", category: "Fruit", quantity: 30, supplier: "Farm W", rating: 4.8, inStock: true },
    { name: "Asparagus", value: 2.2, details: "Tender asparagus", category: "Vegetable", quantity: 70, supplier: "Farm X", rating: 4.3, inStock: true },
    { name: "Papaya", value: 2.0, details: "Sweet papayas", category: "Fruit", quantity: 40, supplier: "Farm Y", rating: 4.6, inStock: true },
    { name: "Radish", value: 0.5, details: "Spicy radishes", category: "Vegetable", quantity: 150, supplier: "Farm Z", rating: 4.1, inStock: true },
    { name: "Blackberry", value: 3.1, details: "Juicy blackberries", category: "Fruit", quantity: 20, supplier: "Farm AA", rating: 4.9, inStock: true },
    { name: "Sweet Potato", value: 1.2, details: "Sweet orange potatoes", category: "Vegetable", quantity: 80, supplier: "Farm AB", rating: 4.4, inStock: true },
    { name: "Cantaloupe", value: 3.0, details: "Sweet cantaloupe", category: "Fruit", quantity: 30, supplier: "Farm AC", rating: 4.7, inStock: true },
    { name: "Eggplant", value: 1.5, details: "Purple eggplant", category: "Vegetable", quantity: 90, supplier: "Farm AD", rating: 4.2, inStock: true },
    { name: "Lime", value: 0.6, details: "Zesty limes", category: "Fruit", quantity: 120, supplier: "Farm AE", rating: 4.3, inStock: true },
    { name: "Beetroot", value: 1.0, details: "Earthy beetroot", category: "Vegetable", quantity: 100, supplier: "Farm AF", rating: 4.1, inStock: true },
    { name: "Pomegranate", value: 2.5, details: "Juicy pomegranates", category: "Fruit", quantity: 40, supplier: "Farm AG", rating: 4.8, inStock: true },
    { name: "Kale", value: 1.3, details: "Nutritious kale", category: "Vegetable", quantity: 70, supplier: "Farm AH", rating: 4.5, inStock: true },
    { name: "Cherries", value: 3.5, details: "Sweet cherries", category: "Fruit", quantity: 30, supplier: "Farm AI", rating: 4.9, inStock: true },
    { name: "Artichoke", value: 2.0, details: "Delicious artichokes", category: "Vegetable", quantity: 50, supplier: "Farm AJ", rating: 4.4, inStock: true },
    { name: "Nectarine", value: 2.2, details: "Juicy nectarines", category: "Fruit", quantity: 60, supplier: "Farm AK", rating: 4.6, inStock: true },
    { name: "Turnip", value: 0.8, details: "White turnips", category: "Vegetable", quantity: 90, supplier: "Farm AL", rating: 4.2, inStock: true },
    { name: "Coconut", value: 2.5, details: "Fresh coconuts", category: "Fruit", quantity: 40, supplier: "Farm AM", rating: 4.7, inStock: true },
    { name: "Pumpkin", value: 1.5, details: "Orange pumpkins", category: "Vegetable", quantity: 80, supplier: "Farm AN", rating: 4.3, inStock: true }
    ]);
    console.log('Sample data seeded!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};


// API Endpoint to get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching items' });
  }
});

// API Endpoint to get a specific item by ID
app.get('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching item' });
  }
});

// API Endpoint to create a new item
app.post('/api/items', async (req, res) => {
  const { name, value, details, category, quantity, supplier, rating, inStock } = req.body;
  try {
    const newItem = new Item({ name, value, details, category, quantity, supplier, rating, inStock });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Error creating item' });
  }
});

// API Endpoint to update an item
app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, value, details, category, quantity, supplier, rating, inStock } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { name, value, details, category, quantity, supplier, rating, inStock }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Error updating item' });
  }
});

// API Endpoint to partially update an item
app.patch('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const updates = {};
  const { name, value, details, category, quantity, supplier, rating, inStock } = req.body;

  if (name !== undefined) updates.name = name;
  if (details !== undefined) updates.details = details;
  if (category !== undefined) updates.category = category;
  if (quantity !== undefined) updates.quantity = quantity;
  if (supplier !== undefined) updates.supplier = supplier;
  if (rating !== undefined) updates.rating = rating;
  if (inStock !== undefined) updates.inStock = inStock;

  if (value !== undefined) {
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
      return res.status(400).json({ error: 'Value must be a valid number.' });
    }
    updates.value = numericValue;
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'No update fields were provided.' });
  }

  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found.' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error('Update Error:', error.message);
    res.status(500).json({ error: 'Failed to update item.' });
  }
});

// API Endpoint to delete an item
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

// Start the server and connect to the database
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase();
});


/*
// Function to seed dummy data
const seedDummyData = async () => {
  try {
    await Item.insertMany([
      { name: 'Alpha Item', value: 120, category: 'Tech' },
      { name: 'Beta Product', value: 250, category: 'Office' },
      { name: 'Gamma Resource', value: 85, category: 'Tech' }
    ]);
    console.log('Sample data seeded!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};
*/