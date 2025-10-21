import React from 'react';
import MapView from '../components/MapView';
import PlantList from '../components/PlantList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>운광초등학교 생태지도</h1>
            <MapView />
            <PlantList />
        </div>
    );
};

export default Home;