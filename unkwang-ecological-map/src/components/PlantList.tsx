import React from 'react';
import plantsData from '../data/plants.json';
import PlantCard from './PlantCard';

const PlantList: React.FC = () => {
    const [selectedPlant, setSelectedPlant] = React.useState(null);

    const handlePlantClick = (plant) => {
        setSelectedPlant(plant);
    };

    return (
        <div className="plant-list">
            <h2>Plants Around 운광초등학교</h2>
            <div className="plants">
                {plantsData.map((plant) => (
                    <div key={plant.name} className="plant-item" onClick={() => handlePlantClick(plant)}>
                        <img src={plant.image} alt={plant.name} className="plant-image" />
                        <p className="plant-name">{plant.name}</p>
                    </div>
                ))}
            </div>
            {selectedPlant && (
                <PlantCard plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
            )}
        </div>
    );
};

export default PlantList;