import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img className={styles.image} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
  
  export default ImageCard;