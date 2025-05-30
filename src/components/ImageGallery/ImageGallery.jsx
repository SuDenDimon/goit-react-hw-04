import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={image.id} className={styles.galleryItem}>
        <ImageCard image={image} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;