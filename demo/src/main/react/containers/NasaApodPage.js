import React, { useState } from 'react';
import './NasaApodPage.css';
import useApiStore from './store';

const NasaApodPage = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [count, setCount] = useState('');

  const { images, fetchImage } = useApiStore();

  const fetchData = async () => {
    try {
      await fetchImage({ fromDate, toDate, count });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clearDates = () => {
    setFromDate('');
    setToDate('');
    setCount('');
  };

  return (
    <div className="nasa-apod-page">
      <h1>NASA Astronomy Picture of the Day</h1>
      <div className="input-section">

        <label htmlFor="dateFrom">Date From:</label>
        <input type="date" id="dateFrom" value={fromDate} onChange={e => setFromDate(e.target.value)} />

        <label htmlFor="dateTo">Date To:</label>
        <input type="date" id="dateTo" value={toDate} onChange={e => setToDate(e.target.value)} />

        <label htmlFor="count">Count:</label>
        <input type="number" id="count" value={count} onChange={e => setCount(e.target.value)} />

        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={clearDates}>Clear All Dates</button>
        <div className="total-count">Total Images: {images.length}</div>
      </div>

      <div className="image-section">
        {images.map(image => (
          <div key={image.date || image.title} className="image-container">
            <div className="image-wrapper">
              <img src={image.url} alt={image.title} />
            </div>
            <div className="image-text">
              <h2>{image.title}</h2>
              <p><strong>Date:</strong> {image.date}</p>
              <p>{image.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaApodPage;












