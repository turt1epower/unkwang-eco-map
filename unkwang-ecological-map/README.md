# Unkwang Ecological Map

This project is a digital ecological map representing the flora around Unkwang Elementary School. It features hand-drawn sketches of plants, each labeled with their names in a handwritten font. Students can interact with the map by clicking on the plant icons to view detailed information, including photos and descriptions.

## Project Structure

- **public/index.html**: The main HTML file serving as the entry point for the application.
- **src/index.tsx**: The entry point for the React application, rendering the main App component.
- **src/App.tsx**: Defines the main App component, setting up routing and layout.
- **src/components**: Contains reusable components:
  - **MapView.tsx**: Displays the ecological map with clickable plant icons.
  - **PlantList.tsx**: Lists all plants available on the map.
  - **PlantCard.tsx**: Shows detailed information about a selected plant.
  - **PhotoModal.tsx**: Displays a modal with the plant's photo and description.
- **src/pages/Home.tsx**: The main page integrating the MapView and PlantList components.
- **src/data/plants.json**: JSON file containing an array of plant objects with properties like name, image URL, and description.
- **src/assets/sketches**: Directory for hand-drawn sketches of the plants.
- **src/assets/fonts/handwriting.ttf**: Custom font for displaying handwritten text.
- **src/styles/globals.css**: Global CSS styles for the application.
- **src/types/index.ts**: TypeScript interfaces and types used throughout the application.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd unkwang-ecological-map
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Interactive ecological map with clickable plant icons.
- Hand-drawn sketches and handwritten labels for a unique aesthetic.
- Detailed plant information displayed in a modal upon clicking a plant icon.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.