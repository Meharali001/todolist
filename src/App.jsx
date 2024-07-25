import React, { useState } from 'react';
import './App.css';

import { services } from './Servicessec';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(services);

  const handleSearch = () => {
    const filteredServices = searchTerm.trim() === ''
      ? services
      : services.filter(service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setResults(filteredServices);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Service Search</h1>
        <input
          type="text"
          placeholder="Search for a service..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {results.length > 0 ? (
          results.map((service, index) => (
            <div key={index} className="service">
              <h2>{service.name}</h2>
              <img src={service.image} alt={service.name} className="service-image" />
            </div>
          ))
        ) : (
          <p>Not found</p>
        )}
      </header>
 
    </div>
  );
};

export default App;
