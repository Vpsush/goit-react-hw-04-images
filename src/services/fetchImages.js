import axios from 'axios';

const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  try {
    const { data } = await axios.get(
      `/?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (data.hits.length === 0) {
      return {
        error: `No results found for "${query}"`,
        images: [],
      };
    }

    return {
      error: null,
      images: data.hits,
    };
  } catch (error) {
    return {
      error,
      images: [],
    };
  }
};
