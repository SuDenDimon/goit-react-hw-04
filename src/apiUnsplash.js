
const keyUnsplash = 'Coj_y8B4wH4A6TefsulhoNFOE6wFe9isz-E7bcsFbDo';

export default async function apiUnsplash(query, page = 1, perPage = 16) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${keyUnsplash}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch images');
    return await response.json();
  }
   