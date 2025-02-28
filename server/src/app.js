const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));
const userNames = ['Admin', 'John', 'Jane', 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivy', 'Jack', 'Kate', 'Liam'];
const eventNames = ['Birthday', 'Wedding', 'Anniversary', 'Graduation', 'Promotion', 'Retirement', 'Housewarming', 'Baby Shower', 'Bachelor Party', 'Bachelorette Party', 'Reunion', 'Farewell', 'Welcome', 'Engagement', 'New Job', 'New Home', 'New Baby', 'New Car', 'New Pet', 'New Hobby', 'New Year', 'Christmas', 'Easter', 'Halloween', 'Thanksgiving'];
const items = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: `${eventNames[getRandomInt(eventNames.length - 1)]}`,
    description: `Description for item ${index + 1}`,
    color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`,
    createdAt: new Date(2000 + getRandomInt(25), getRandomInt(12), getRandomInt(31)),
    updatedAt: new Date(2000 + getRandomInt(25), getRandomInt(12), getRandomInt(31)),
    createdBy: `${userNames[getRandomInt(userNames.length - 1)]}`
}));



// Middleware
app.use(cors());
app.use(bodyParser.json());

// 1️⃣ Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// 2️⃣ Add a new item
app.post('/items', (req, res) => {
    const { name, description, color, createdBy } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const newItem = {
        id: items.length + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name, description, color, createdBy
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// 3️⃣ Update an item by ID
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const itemIndex = items.findIndex(item => item.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({ message: "Item not found" });
    }

    items[itemIndex] = { id: parseInt(id), ...req.body, updatedAt: new Date() };
    res.json(items[itemIndex]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
