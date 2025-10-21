import React, { useState } from 'react';
import plantsData from '../data/plants.json';
import PlantCard from './PlantCard';
import PhotoModal from './PhotoModal';
import './MapView.css'; // Assuming you will create a CSS file for styling

const MapView: React.FC = () => {
    const [selectedPlant, setSelectedPlant] = useState<null | { name: string; image: string; description: string }>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlantClick = (plant: { name: string; image: string; description: string }) => {
        setSelectedPlant(plant);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlant(null);
    };

    return (
        <div className="map-view">
            <h1>Ecological Map of 운광초등학교</h1>
            <div className="plant-icons">
                {plantsData.map((plant) => (
                    <div key={plant.name} className="plant-icon" onClick={() => handlePlantClick(plant)}>
                        <img src={plant.image} alt={plant.name} className="plant-sketch" />
                        <span className="plant-name">{plant.name}</span>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedPlant && (
                <PhotoModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    plant={selectedPlant}
                />
            )}
        </div>
    );
};

export default MapView;