import React, { useState } from 'react';
import './NasaApodPage.css';

const NasaApodPage = () => {
  const [date, setDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [count, setCount] = useState('');
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      // Clear images before fetching new data
      setImages([]);

      const fetchAndSetImages = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        // Check if data is an array, if not, make it an array
        const imagesArray = Array.isArray(data) ? data : [data];
        setImages(prevImages => [...prevImages, ...imagesArray]);
      };

      if (date) {
        await fetchAndSetImages(`/nasa-apod/picture?date=${date}`);
      }
      if (fromDate) {
        await fetchAndSetImages(`/nasa-apod/picture?start_date=${fromDate}`);
      }
      if (toDate) {
        await fetchAndSetImages(`/nasa-apod/picture?end_date=${toDate}`);
      }
      if (count) {
        await fetchAndSetImages(`/nasa-apod/picture?count=${count}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="nasa-apod-page">
      <h1>NASA Astronomy Picture of the Day</h1>
      <div className="input-section">
        <label htmlFor="singleDate">Single Date : </label>
        <input type="date" id="singleDate" value={date} onChange={e => setDate(e.target.value)} />

        <label htmlFor="dateFrom">Date From : </label>
        <input type="date" id="dateFrom" value={fromDate} onChange={e => setFromDate(e.target.value)} />

        <label htmlFor="dateTo">Date To : </label>
        <input type="date" id="dateTo" value={toDate} onChange={e => setToDate(e.target.value)} />

        <label htmlFor="count">Count : </label>
        <input type="number" id="count" value={count} onChange={e => setCount(e.target.value)} />

        <button onClick={fetchData}>Fetch Data</button>
        <div className="total-count">Total Images: {images.length}</div> {/* Display total count of images */}
      </div>

      <div className="image-section">
        {images.map(image => (
          <div key={image.date} className="image-container">
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




