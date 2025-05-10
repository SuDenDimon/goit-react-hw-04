import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import apiUnsplash from './apiUnsplash';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await apiUnsplash(query, page);
        setImages(prev => (page === 1 ? data.results : [...prev, ...data.results]));
        setTotalPages(Math.ceil(data.total / 12));
      } catch {
        setError('Не вдалося завантажити зображення');
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSearch = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setModalImage} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && page < totalPages && (
        <div className='load-more-wrapper'>
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </>
  );
}

export default App;


