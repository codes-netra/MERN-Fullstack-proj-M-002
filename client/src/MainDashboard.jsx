/*
// MainDashboard.js
import React from 'react';
import { Link } from 'react-router';

const MainDashboard = ({ items, deleteItem }) => (
  <>
    <Link to="/add">Add Item</Link>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item) => (
        <li key={item._id} style={{ border: '1px solid #ccc', margin: '0.5rem 0', padding: '1rem', borderRadius: '4px' }}>
          <strong>{item.name}</strong> - Value: {item.value} <em>({item.category})</em>
          <Link to={`/update/${item._id}`} style={{ marginLeft: '10px' }}>Update</Link>
          <button onClick={() => deleteItem(item._id)} style={{ marginLeft: '10px' }}>Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export default MainDashboard;
*/

import React from 'react';
import { Link } from 'react-router';

const MainDashboard = ({ items, deleteItem }) => (
  <>
    <Link to="/add">Add Item</Link>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item) => (
        <li key={item._id} style={{ border: '1px solid #ccc', margin: '0.5rem 0', padding: '1rem', borderRadius: '4px' }}>
       {/*   <strong>{item.name}</strong> - Value: {item.value} <em>({item.category})</em> */}

        <strong>{item.name}</strong> - Value: ${item.value} <em>({item.category})</em>
        <div>Details: {item.details}</div>
        <div>Quantity: {item.quantity}</div>
        <div>Supplier: {item.supplier}</div>
        <div>Rating: {item.rating}</div>
        <div>In Stock: {item.inStock ? 'Yes' : 'No'}</div>


          <Link to={`/update/${item._id}`} style={{ marginLeft: '10px' }}>Update</Link>
          <Link to={`/item/${item._id}`} style={{ marginLeft: '10px' }}>view</Link>
          <button onClick={() => deleteItem(item._id)} style={{ marginLeft: '10px' }}>Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export default MainDashboard;