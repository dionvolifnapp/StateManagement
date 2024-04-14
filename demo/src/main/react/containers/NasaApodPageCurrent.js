import React, { useState } from 'react';
import './NasaApodPage.css';
import useApiStore from './apiStore';

const NasaApodPageCurrent = () => {
  const [date, setDate] = useState('');
  const { images, fetchImage } = useApiStore();

  const fetchData = async () => {
    await fetchImage({ date });
  };

  return (
    <div className="nasa-apod--current-page">
      <h1>NASA Astronomy Picture of the Day</h1>

      <div className="input-section">
        <label htmlFor="singleDate">Single Date:</label>
        <input type="date" id="singleDate" value={date} onChange={e => setDate(e.target.value)} />

        <button onClick={fetchData}>Fetch Data</button>
      </div>

      {images.length > 0 && (
        <div className="image-container">
          <div className="image-wrapper">
            <img src={images[0].url} alt={images[0].title} />
          </div>
          <div className="image-text">
            <h2>{images[0].title}</h2>
            <p><strong>Date:</strong> {images[0].date}</p>
            <p>{images[0].explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NasaApodPageCurrent;














