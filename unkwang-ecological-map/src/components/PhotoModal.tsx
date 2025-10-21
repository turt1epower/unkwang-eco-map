import React from 'react';
import Modal from 'react-modal';

interface PhotoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  plant: {
    name: string;
    image: string;
    description: string;
  } | null;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onRequestClose, plant }) => {
  if (!plant) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.description}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default PhotoModal;