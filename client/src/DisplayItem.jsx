/* 
//Change of item from 3 to 8.
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const DisplayItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:3000/api/items/${id}`);
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Value: {item.value}</p>
      <p>Category: {item.category}</p>
    </div>
  );
};

export default DisplayItem;
*/
// DisplayItem.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const API_URL = import.meta.env.VITE_API_URL;

const DisplayItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Value: {item.value}</p>
      <p>Details: {item.details}</p>
      <p>Category: {item.category}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Supplier: {item.supplier}</p>
      <p>Rating: {item.rating}</p>
      <p>In Stock: {item.inStock ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default DisplayItem;