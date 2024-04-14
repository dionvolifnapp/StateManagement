import create from 'zustand';

const useApiStore = create((set) => ({
  image: null,
  images: [],
  fetchImage: async ({ date, fromDate, toDate, count }) => {
    try {
      const newImages = [];

      const fetchAndSetImages = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const imagesArray = Array.isArray(data) ? data : [data];
        return imagesArray.filter(image => image.url);
      };

      if (date) {
        newImages.push(...await fetchAndSetImages(`/nasa-apod/picture?date=${date}`));
      }
      if (fromDate && toDate) {
        newImages.push(...await fetchAndSetImages(`/nasa-apod/picture?start_date=${fromDate}&end_date=${toDate}`));
      } else {
        if (fromDate) {
          newImages.push(...await fetchAndSetImages(`/nasa-apod/picture?start_date=${fromDate}`));
        }
        if (toDate) {
          newImages.push(...await fetchAndSetImages(`/nasa-apod/picture?end_date=${toDate}`));
        }
      }
      if (count) {
        newImages.push(...await fetchAndSetImages(`/nasa-apod/picture?count=${count}`));
      }

      set({ images: newImages });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useApiStore;


