import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cats.css';

// Utility function for shuffling array (Durstenfeld Shuffle)
const durstenfeldShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// List of random names (ensure there are enough names for the animals)
const randomNames = ["Bella", "Luna", "Max", "Charlie", "Daisy", "Rocky", "Molly", "Buddy", "Zoe", "Lucy", "Milo", "Coco", "Sadie", "Duke", "Bailey", "Ruby", "Roxy", "Teddy", "Sophie", "Finn"];

// ShowDogsAndCats component to display both dogs and cats together
const ShowDogsAndCats = () => {
  const dogURL = 'https://api.thedogapi.com/v1/images/search?has_breeds=1&limit=10&api_key=live_BTK0lGykD31fg6cJuh9AaxbQyPGWScK14d4dnJu8Jpa7M0m0MhQdUOuJAZ53e0LY';
  
  const catURL = 'https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&api_key=live_f1lnba1jXw8AjM4uv5JiwMpkPMSU9V8tqyrG1M6bFw0lmRgJSyylL0aLtYmguzJz';

  const [petData, setPetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dogApiRes, catApiRes] = await Promise.all([
          axios.get(dogURL),
          axios.get(catURL),
        ]);

        // Combine both data sets
        const allPetData = [...dogApiRes.data, ...catApiRes.data];

        // Filter out GIF images (exclude URLs that end with .gif)
        const nonGifPetData = allPetData.filter((animal) =>
          !animal.url.toLowerCase().endsWith('.gif')
        );

        // Shuffle the randomNames array to ensure uniqueness
        durstenfeldShuffle(randomNames);

        // Assign a unique name to each animal
        const namedPetData = nonGifPetData.map((animal, index) => ({
          ...animal,
          randomName: randomNames[index % randomNames.length],
          gender: Math.random() > 0.5 ? "Male" : "Female",
        }));

        // Shuffle the named non-GIF data
        durstenfeldShuffle(namedPetData);

        // Set the combined and shuffled non-GIF data with unique names
        setPetData(namedPetData);
      } catch (error) {
        console.error('Error fetching pet data:', error);
      }
    };

    fetchData();
  }, []);

  const renderAnimals = () => {
    if (petData.length === 0) return <p>Loading...</p>;

    return petData.map((animal, index) => {
      const breed = animal.breeds && animal.breeds[0];
      return (
        <div key={index} className="animal-item">
          <img className="image" src={animal.url} alt="animal img" />
          <div className="animal-details">
            <p className="animal-name">Name: {animal.randomName}</p>
            {breed ? (
              <>
                <p className="breed-name">Breed: {breed.name}</p>
                <p className="animal-age">Age: {breed.life_span}</p>
                <p className="animal-gender">Gender: {animal.gender}</p>
              </>
            ) : (
              <p className="breed-name">Unknown Breed</p>
            )}
          </div>
        </div>
      );
    });
  };

  return <div className="showlist">{renderAnimals()}</div>;
};

// Main App component to display animal gallery
export default function App() {
  return (
    <div className="animal-title">
      <h1>Adoption Success Stories</h1>
      <ShowDogsAndCats />
    </div>
  );
}
