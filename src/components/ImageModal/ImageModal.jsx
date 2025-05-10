import Modal from 'react-modal';
import styles from './ImageModal.module.css'

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    className={styles.content}
    overlayClassName={styles.overlay}
  >
    <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
  </Modal>
);

export default ImageModal;