import React from 'react';

interface PlantCardProps {
    name: string;
    imageUrl: string;
    description: string;
    onClose: () => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ name, imageUrl, description, onClose }) => {
    return (
        <div className="plant-card">
            <h2 style={{ fontFamily: 'handwriting' }}>{name}</h2>
            <img src={imageUrl} alt={name} />
            <p>{description}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default PlantCard;