/*

import React, { useState } from 'react';

const AddItem = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, value, category };
    await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    // Redirect or update state as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;

*/


import React, { useState } from 'react';

const AddItem = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [supplier, setSupplier] = useState('');
  const [rating, setRating] = useState('');
  const [inStock, setInStock] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, value, details, category, quantity, supplier, rating, inStock };
    await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    // Redirect or update state as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} required />
      <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <input type="text" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} /> In Stock
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;