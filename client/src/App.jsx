/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import DisplayItem from './DisplayItem';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/items');
      if (!response.ok) throw new Error('Network response failed');
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: '2rem' }}>Loading data...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;

  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
        <h2>Data Visualizer from Backend Array</h2>
        <Link to="/add" style={{ marginBottom: '1rem', display: 'block' }}>Add Item</Link>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item) => (
            <li key={item._id} style={{ border: '1px solid #ccc', margin: '0.5rem 0', padding: '1rem', borderRadius: '4px' }}>
              <strong>{item.name}</strong> - Value: {item.value} <em>({item.category})</em>
              <Link to={`/display/${item._id}`} style={{ marginLeft: '1rem' }}>View</Link>
              <Link to={`/update/${item._id}`} style={{ marginLeft: '1rem' }}>Update</Link>
            </li>
          ))}
        </ul>
        <Routes>
          <Route path="/add" component={AddItem} />
          <Route path="/update/:id" component={UpdateItem} />
          <Route path="/display/:id" component={DisplayItem} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'; 
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import DisplayItem from './DisplayItem';
import MainDashboard from './MainDashboard'; // Importing the MainDashboard component
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import About from './About';
import Service from './Service';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) throw new Error('Network response failed');
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setItems(items.filter(item => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div style={{ padding: '2rem' }}>Loading data...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;

  return (
    <Router>

      <Header />
     {/* <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
        <h2>Data Visualizer from Backend Array..</h2>
     */}   
        <Routes>
          
           <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<MainDashboard items={items} deleteItem={deleteItem} />} />
          
          <Route path="/add" element={<AddItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/item/:id" element={<DisplayItem />} />

          <Route path="/displayitem" element={<DisplayItem />} />
          

          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />

        </Routes>
      {/*</div>*/}
      <Footer />
    </Router>
  );
};

export default App;
