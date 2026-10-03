/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    category: ''
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/items/${id}`);
        console.log("Fetched ID:", id);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItem(data);
        setFormData({
          name: data.name,
          value: data.value,
          category: data.category
        });
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedItem = { ...formData };
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Redirect or update state as needed
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="value" value={formData.value} onChange={handleChange} required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItem;
*/

/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    category: ''
  });




  //
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/items/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Log this to verify the exact structure of your data object!
        console.log("Fetched API Data:", data); 

        // Added || '' fallbacks to prevent undefined values
        setFormData({
          name: data.name || '',
          value: data.value || '',
          category: data.category || ''
        });
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);


////////////////////////////////////
//google correction
useEffect(() => {
  const fetchItem = async () => {
    // Prevent fetching if id is missing or undefined
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/items/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Fetched API Data:", data);
      
      setFormData({
        name: data.name || '',
        value: data.value || '',
        category: data.category || ''
      });
    } catch (error) {
      console.error("Error fetching item:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchItem();
}, [id]);


///////////////////////////////////////////////////
























  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="value" value={formData.value} onChange={handleChange} required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItem;
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    details: '',
    category: '',
    quantity: '',
    supplier: '',
    rating: '',
    inStock: false,
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/items/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log("Fetched API Data:", data); 

        setFormData({
          name: data.name || '',
          value: data.value || '',
          details: data.details || '',
          category: data.category || '',
          quantity: data.quantity || '',
          supplier: data.supplier || '',
          rating: data.rating || '',
          inStock: data.inStock || false,
        });
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="value" value={formData.value} onChange={handleChange} required />
      <input type="text" name="details" value={formData.details} onChange={handleChange} required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
      <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} required />
      <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
      <label>
        In Stock:
        <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} />
      </label>
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItem;
