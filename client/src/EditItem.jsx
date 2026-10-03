
/*  change of item number from 3 to 8.
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function EditItem() {
  const { id } = useParams();
  const [item, setItem] = useState({ name: '', value: '', category: '' });

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:3000/api/items/${id}`);
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    // Optionally redirect or update state
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/api/items/${id}`, { method: 'DELETE' });
    // Optionally redirect or update state
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} required />
      <input type="number" value={item.value} onChange={(e) => setItem({ ...item, value: e.target.value })} required />
      <input type="text" value={item.category} onChange={(e) => setItem({ ...item, category: e.target.value })} required />
      <button type="submit">Update Item</button>
      <button type="button" onClick={handleDelete}>Delete Item</button>
    </form>
  );
}

export default EditItem;
*/



// EditItem.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const API_URL = import.meta.env.VITE_API_URL;


function EditItem() {
  const { id } = useParams();
  const [item, setItem] = useState({ name: '', value: '', details: '', category: '', quantity: '', supplier: '', rating: '', inStock: false });

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    // Optionally redirect or update state
  };

  const handleDelete = async () => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    // Optionally redirect or update state
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} required />
      <input type="number" value={item.value} onChange={(e) => setItem({ ...item, value: e.target.value })} required />
      <input type="text" value={item.details} onChange={(e) => setItem({ ...item, details: e.target.value })} required />
      <input type="text" value={item.category} onChange={(e) => setItem({ ...item, category: e.target.value })} required />
      <input type="number" value={item.quantity} onChange={(e) => setItem({ ...item, quantity: e.target.value })} required />
      <input type="text" value={item.supplier} onChange={(e) => setItem({ ...item, supplier: e.target.value })} required />
      <input type="number" value={item.rating} onChange={(e) => setItem({ ...item, rating: e.target.value })} required />
      <input type="checkbox" checked={item.inStock} onChange={(e) => setItem({ ...item, inStock: e.target.checked })} />
      <button type="submit">Update Item</button>
      <button type="button" onClick={handleDelete}>Delete Item</button>
    </form>
  );
}