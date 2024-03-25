import React, { useState } from 'react';
import './DogApiPage.css'; // Ensure you have corresponding CSS for this component

const DogApiPage = () => {
  const [breedId, setBreedId] = useState('');
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      const url = breedId
        ? `/dog-api/images/search?breed_id=${breedId}`
        : `/dog-api/images/search`; // Adjust endpoint as necessary based on your backend setup
      const response = await fetch(url);
      const newImages = await response.json();

      setImages(newImages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dog-api-page">
      <h1>Dog Images Gallery</h1>
      <div className="input-section">
        <label htmlFor="breedId">Breed ID:</label>
        <input
          type="text"
          id="breedId"
          value={breedId}
          onChange={e => setBreedId(e.target.value)}
          placeholder="Enter breed ID"
        />

        <button onClick={fetchData}>Fetch Images</button>
        <button onClick={() => setImages([])}>Clear Images</button>
        <div className="total-count">Total Images: {images.length}</div>
      </div>

      <div className="image-section">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <div className="image-wrapper">
              <img src={image.url} alt={`Dog ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogApiPage;
